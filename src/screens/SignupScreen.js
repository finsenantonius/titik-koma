import React from "react";
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

export const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <ContentContainer>
        <SafeArea>
          <Container>
            <Spacer>
              <HeaderContainer>
                <HeaderText>Hello!</HeaderText>
                <HeaderText>Sign up to get started</HeaderText>
                {/* <HeaderText>get started</HeaderText> */}
              </HeaderContainer>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <Button>
                <ButtonText>Sign up</ButtonText>
              </Button>

              <NavContainer>
                <NavText>Already Have An Account? </NavText>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                  <NavLink>Sign in</NavLink>
                </TouchableOpacity>
              </NavContainer>
            </Spacer>
          </Container>
        </SafeArea>
      </ContentContainer>
    </KeyboardAvoidingView>
  );
};
