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

const AlertText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold}
  color: red
`;

const Text1 = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #305f72;
`;

export const OtpScreen = ({ navigation }) => {
  const { otpEmail } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const [invalidOtp, setInvalidOtp] = useState("");

  const submitOtp = ({ otp }) => {
    console.log(otpEmail);
    if (otp === otpEmail) {
      navigation.navigate("ResetPassword");
    } else {
      setInvalidOtp("OTP tidak sesuai.");
    }
  };

  return (
    <KeyboardAvoidingView>
      <ContentContainer>
        <SafeArea>
          <Container>
            <Spacer>
              <Text1>Kode OTP sudah dikirimkan ke email Anda.</Text1>
              <Input
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                label="OTP"
                placeholder="OTP"
                value={otp}
                onChangeText={setOtp}
              />
              {invalidOtp ? <AlertText>{invalidOtp}</AlertText> : null}
              <Button onPress={() => submitOtp({ otp })}>
                <ButtonText>Submit</ButtonText>
              </Button>
            </Spacer>
          </Container>
        </SafeArea>
      </ContentContainer>
    </KeyboardAvoidingView>
  );
};
