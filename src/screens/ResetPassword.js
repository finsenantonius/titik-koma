import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  BackHandler,
  Alert,
} from "react-native";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

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

const NavContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const NavLink = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: #24253d
  font-size: 16px;
  text-decoration: underline
`;

export const ResetPasswordScreen = ({ navigation }) => {
  const { resetPassword, alertPassword, onError, endProcess } =
    useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // useEffect(() => {
  //   resetAlert();
  // }, []);
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Signin");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeArea>
      <Container>
        <HeaderText>Ubah kata sandi Anda.</HeaderText>
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
          style={{ backgroundColor: endProcess ? "#546e87" : "#0e4a86" }}
          disabled={endProcess}
          onPress={() => resetPassword({ newPassword, confPassword })}
        >
          <ButtonText>Ubah Password</ButtonText>
        </Button>
        <NavContainer>
          <Label>{alertPassword}</Label>
          <TouchableOpacity
            style={{ display: endProcess ? "flex" : "none" }}
            onPress={() => navigation.navigate("Signin")}
          >
            <NavLink>Masuk</NavLink>
          </TouchableOpacity>
        </NavContainer>
      </Container>
    </SafeArea>
  );
};
