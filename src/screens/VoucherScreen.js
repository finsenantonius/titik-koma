import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Header } from "../components/Header";
import { UserContext } from "../context/UserContext";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: whitesmoke;
`;

const Container = styled(View)`
  flex: 1;
  background-color: whitesmoke;
  padding: 16px;
`;

const HeaderText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 24px;
  color: #0e4a86;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  height: 60px;
  margin-bottom: 12px;
  elevation: 1;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-weight: normal;
`;

const Button = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;
  background-color: #0e4a86;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 12px
  margin-bottom: 12px;
`;

const ButtonText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodyBold};
  font-size: 16px
  color: #fff;
`;

const AlertTextSuccess = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: green
`;

const AlertTextError = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: red
`;

export const VoucherScreen = ({ navigation }) => {
  const {
    redeemVoucher,
    alertVoucher,
    voucherError,
    setAlertVoucher,
    getCredential,
    isRedeemVoucher,
    setVoucherError,
    getVoucherCode,
    voucherCode,
  } = useContext(UserContext);
  const [usedVoucher, setUsedVoucher] = useState("");
  const [voucher, setVoucher] = useState("");
  const [errorVoucher, setErrorVoucher] = useState("");

  useEffect(() => {
    getCredential();
    getVoucherCode();
    navigation.addListener("focus", () => {
      setAlertVoucher("");
      setVoucherError("");
    });
  }, []);

  const navigate = () => {
    navigation.navigate("Voucher");
  };

  const submitVoucher = () => {
    if (isRedeemVoucher === true && voucher === voucherCode) {
      setUsedVoucher("Kode voucher sudah digunakan.");
      setErrorVoucher("");
    } else if (voucher === voucherCode) {
      redeemVoucher({ isRedeemVoucher: true, navigate });
      setErrorVoucher("");
    } else {
      setErrorVoucher("Kode voucher salah.");
    }
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Kode Voucher" />
      <Container>
        <HeaderText>Masukkan kode voucher untuk mendapat hadiah.</HeaderText>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Voucher"
          placeholder="Masukkan kode voucher"
          value={voucher}
          onChangeText={setVoucher}
        />
        {usedVoucher ? (
          <AlertTextSuccess>{usedVoucher}</AlertTextSuccess>
        ) : null}
        {alertVoucher ? (
          <AlertTextSuccess>{alertVoucher}</AlertTextSuccess>
        ) : null}
        {voucherError ? <AlertTextError>{voucherError}</AlertTextError> : null}
        {errorVoucher ? <AlertTextError>{errorVoucher}</AlertTextError> : null}
        <Button onPress={submitVoucher}>
          <ButtonText>Redeem</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};
