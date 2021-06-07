import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeArea } from "../components/SafeAreaView";
import { Spacer } from "../components/Spacer";

const ContentContainer = styled(ScrollView)`
  padding-top: 50px;
`;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

const HeaderContainer = styled(View)`
  margin-bottom: 18px;
`;

const HeaderText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.headingSemiBold};
  font-size: 45px;
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

const NavContainer = styled(View)`
  flex-direction: row;
`;

const NavText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: #24253d
`;

const NavLink = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: #24253d
  text-decoration: underline
`;

const AlertText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: red
`;

const AlertTextSuccess = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: green
`;

export const SignupScreen = ({ navigation }) => {
  const { signUp, alert, alertSuccess, clearAlert } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearAlert();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView>
      <ContentContainer>
        <SafeArea>
          <Container>
            <Spacer>
              <HeaderContainer>
                <HeaderText>Hallo!</HeaderText>
                <HeaderText>Sign up to get started</HeaderText>
                {/* <HeaderText>get started</HeaderText> */}
              </HeaderContainer>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Name"
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                label="Password"
                value={password}
                onChangeText={setPassword}
              />
              {alert ? <AlertText>{alert}</AlertText> : null}
              {alertSuccess ? (
                <AlertTextSuccess>{alertSuccess}</AlertTextSuccess>
              ) : null}

              <Button onPress={() => signUp({ name, email, password })}>
                <ButtonText>Daftar</ButtonText>
              </Button>

              <NavContainer>
                <NavText>Sudah punya akun? </NavText>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                  <NavLink>Masuk</NavLink>
                </TouchableOpacity>
              </NavContainer>
            </Spacer>
          </Container>
        </SafeArea>
      </ContentContainer>
    </KeyboardAvoidingView>
  );
};
