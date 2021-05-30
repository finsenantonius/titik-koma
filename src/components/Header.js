import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled(View)`
  overflow: hidden;
  padding-bottom: 1px;
`;

const HeaderContainer = styled(View)`
  height: 50px;
  padding: 14px;
  flex-direction: row;
  background-color: whitesmoke;
  flex-direction: row;
  elevation: 2;
`;

const Icon = styled(MaterialIcons)`
  color: black;
  font-size: 22px;
  margin-right: 12px;
  align-self: center;
`;

const TitleContainer = styled(View)`
  flex: 1;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 18px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
  margin-right: 34px
`;

const ChallengeTitle = styled(Text)`
  font-size: 18px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
`;

export const Header = ({ navigate, title }) => {
  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={navigate}>
          <Icon name="arrow-back" />
        </TouchableOpacity>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </HeaderContainer>
    </Container>
  );
};

export const ChallengeHeader = ({ title }) => {
  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <ChallengeTitle>{title}</ChallengeTitle>
        </TitleContainer>
      </HeaderContainer>
    </Container>
  );
};
