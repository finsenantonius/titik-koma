import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  justify-content: space-between;
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

const AlertSuccess = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: green
`;

export const ForgotPasswordScreen = ({ navigation }) => {
  const { ForgotPassword, alertEmail, clearAlert } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearAlert();
    });
    return unsubscribe;
  }, [navigation]);

  const submitForgotPassword = ({ email, navigate }) => {
    let otp = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);

    ForgotPassword({ email, otp, navigate });
  };

  const navigate = () => {
    navigation.navigate("OTP");
  };

  return (
    <KeyboardAvoidingView>
      <ContentContainer>
        <SafeArea>
          <Container>
            <Spacer>
              <HeaderContainer>
                <HeaderText>Lupa Password</HeaderText>
              </HeaderContainer>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              {alertEmail ? <AlertText>{alertEmail}</AlertText> : null}
              <Button onPress={() => submitForgotPassword({ email, navigate })}>
                <ButtonText>Kirim OTP</ButtonText>
              </Button>
            </Spacer>
          </Container>
        </SafeArea>
      </ContentContainer>
    </KeyboardAvoidingView>
  );
};
