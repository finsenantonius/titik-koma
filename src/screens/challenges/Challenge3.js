import React, { useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, SafeAreaView, StatusBar } from "react-native";
import { ChallengeHeader } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { BtnChallenge } from "../../components/Button";
import { Options } from "../../components/Button";

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

const QuestionText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: black;
  margin-bottom: 16px;
`;

export const Challenge3 = ({ navigation }) => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  const selectA = () => {
    setOption1(true);
    setOption2(false);
    setOption3(false);
  };
  const selectB = () => {
    setOption1(false);
    setOption2(true);
    setOption3(false);
  };
  const selectC = () => {
    setOption1(false);
    setOption2(false);
    setOption3(true);
  };

  const submit = () => {
    if (option1 === true) {
      AsyncStorage.setItem("@challenge3", "20");
    } else {
      AsyncStorage.setItem("@challenge3", "0");
    }
    navigation.navigate("Challenge4");
  };

  return (
    <SafeArea>
      <ChallengeHeader title="Challenge" />
      <Container>
        <HeaderText>3 dari 5</HeaderText>
        <QuestionText>
          Bagaimana cara memanggil function yang benar ?
        </QuestionText>

        <Options
          text={`myFunction()`}
          isSelected={option1}
          select={() => selectA()}
        />
        <Options
          text={`call myFunction()`}
          isSelected={option2}
          select={() => selectB()}
        />
        <Options
          text={`call function myFunction()`}
          isSelected={option3}
          select={() => selectC()}
        />

        <Wrapper>
          <BtnChallenge
            title="Selanjutnya"
            isDisabled={false}
            navigate={submit}
          />
        </Wrapper>
      </Container>
    </SafeArea>
  );
};
