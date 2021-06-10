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

export const FeedbackScreen = ({ navigation }) => {
  const {
    sendFeedback,
    alertFeedback,
    errorFeedback,
    setAlertFeedback,
    setErrorFeedback,
  } = useContext(UserContext);
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {
    sendFeedback({ feedback: feedback });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setAlertFeedback("");
      setErrorFeedback("");
    });
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Feedback" />
      <Container>
        <HeaderText>Masukkan feedback Anda.</HeaderText>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Voucher"
          placeholder="Masukkan feedback"
          value={feedback}
          onChangeText={setFeedback}
        />
        {alertFeedback ? (
          <AlertTextSuccess>{alertFeedback}</AlertTextSuccess>
        ) : null}
        {errorFeedback ? (
          <AlertTextError>{errorFeedback}</AlertTextError>
        ) : null}
        <Button
          onPress={submitFeedback}
          disabled={feedback ? false : true}
          style={{ backgroundColor: feedback ? "#0e4a86" : "#546e87" }}
        >
          <ButtonText>Kirim</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};
