import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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

const Label = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: #0e4a86;
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

export const ChangePasswordScreen = ({ navigation }) => {
  const { changePassword, alertPassword, resetAlert, onError } =
    useContext(UserContext);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  useEffect(() => {
    resetAlert();
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Ubah Password" />
      <Container>
        <HeaderText>Ubah kata sandi anda.</HeaderText>
        <Label>Password Lama</Label>
        <Input
          placeholder="Masukkan password anda"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Label>Password Baru</Label>
        <Input
          placeholder="Masukkan password baru"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Label>Konfirmasi Password Baru</Label>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          label="Password"
          value={confPassword}
          onChangeText={setConfPassword}
          style={{
            borderWidth: onError ? 2 : 0,
            borderColor: onError ? "red" : null,
          }}
        />
        <Button
          onPress={() =>
            changePassword({ password, newPassword, confPassword })
          }
        >
          <ButtonText>Ubah Password</ButtonText>
        </Button>
        <Label>{alertPassword}</Label>
      </Container>
    </SafeArea>
  );
};
