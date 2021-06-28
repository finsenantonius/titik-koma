import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled(TouchableOpacity)`
  height: 82px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  elevation: 2;
  margin-vertical: 6px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
`;

const TitleContainer = styled(View)``;

const CourseName = styled(Text)`
  font-size: 18px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
`;

const DescriptionText = styled(Text)`
  font-size: 14px
  font-family: ${(props) => props.theme.fonts.body};
  color: #305f72;
`;

const Icon = styled(MaterialIcons)`
  color: black;
  font-size: 22px;
  margin-right: 12px;
  align-self: center;
`;

const Arrow = styled(MaterialIcons)`
  color: black;
  font-size: 22px;
  align-self: center;
`;

const CourseIcon = styled(Image)`
  height: 50px;
  width: 50px;
  margin-right: 12px;
`;

export const ChallengeCard = ({ data, navigate }) => {
  return (
    <Container onPress={navigate}>
      <Wrapper>
        <CourseIcon source={{ uri: data.challengeIcon }} />
        <TitleContainer>
          <CourseName>{data.challengeName}</CourseName>
          <DescriptionText>{data.challengeDescription}</DescriptionText>
        </TitleContainer>
      </Wrapper>
      <Arrow name="chevron-right" />
    </Container>
  );
};
