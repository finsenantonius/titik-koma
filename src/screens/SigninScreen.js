import React from "react";
import styled from "styled-components/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeArea } from "../components/SafeAreaView";
import { Spacer } from "../components/Spacer";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: whitesmoke;
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
`;

const ButtonText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodyBold};
  font-size: 16px
  color: #fff;
`;

export const SigninScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <Spacer>
          <HeaderText>Hello Again!</HeaderText>
          <HeaderText>Welcome back</HeaderText>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>
            <ButtonText>Sign In</ButtonText>
          </Button>
        </Spacer>
      </Container>
    </SafeArea>
  );
};
