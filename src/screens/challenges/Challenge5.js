import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, SafeAreaView, StatusBar } from "react-native";
import { ChallengeHeader } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { BtnChallenge } from "../../components/Button";
import { Options } from "../../components/Button";
import { UserContext } from "../../context/UserContext";

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

export const Challenge5 = ({ navigation }) => {
  const { updateScore } = useContext(UserContext);
  const [score, setScore] = useState(0);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const selectA = () => {
    setOption1(true);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  };
  const selectB = () => {
    setOption1(false);
    setOption2(true);
    setOption3(false);
    setOption4(false);
  };
  const selectC = () => {
    setOption1(false);
    setOption2(false);
    setOption3(true);
    setOption4(false);
  };
  const selectD = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(true);
  };

  useEffect(() => {
    const getScore = async () => {
      try {
        const s1 = await AsyncStorage.getItem("@challenge1");
        const s2 = await AsyncStorage.getItem("@challenge2");
        const s3 = await AsyncStorage.getItem("@challenge3");
        const s4 = await AsyncStorage.getItem("@challenge4");
        const total = parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4);
        setScore(total);
      } catch (e) {
        console.log(e);
      }
    };
    getScore();
  });

  const navigate = () => {
    navigation.navigate("CompetitionList");
  };

  const submit = () => {
    if (option4 === true) {
      let totalScore = score + 20;
      console.log(1, totalScore);
      updateScore({ score: totalScore, navigate });
    } else {
      console.log(2, score);
      updateScore({ score: score, navigate });
    }
  };

  return (
    <SafeArea>
      <ChallengeHeader title="Challenge" />
      <Container>
        <HeaderText>5 dari 5</HeaderText>
        <QuestionText>
          Bagaimana cara membuat FOR loop yang benar ?
        </QuestionText>

        <Options
          text={`for i = 1 to 5`}
          isSelected={option1}
          select={() => selectA()}
        />
        <Options
          text={`for (i = 0; i <= 5)`}
          isSelected={option2}
          select={() => selectB()}
        />
        <Options
          text={`for (i <= 5; i++)`}
          isSelected={option3}
          select={() => selectC()}
        />
        <Options
          text={`for (i = 0; i <= 5; i++)`}
          isSelected={option4}
          select={() => selectD()}
        />

        <Wrapper>
          <BtnChallenge title="Submit" isDisabled={false} navigate={submit} />
        </Wrapper>
      </Container>
    </SafeArea>
  );
};
