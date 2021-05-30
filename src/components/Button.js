import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

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

const ChallengeButton = styled(TouchableOpacity)`
  height: 60px;
  width: 40%;
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

const Option = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  margin-top: 4px
  margin-bottom: 4px;
  padding: 16px
`;

const OptionText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodyBold};
  font-size: 16px;
`;

export const BtnPrimary = ({ title }) => {
  return (
    <Button>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export const BtnChallenge = ({ title, isDisabled, navigate }) => {
  return (
    <ChallengeButton
      onPress={navigate}
      disabled={isDisabled}
      style={{ backgroundColor: isDisabled ? "#56718c" : "#0e4a86" }}
    >
      <ButtonText>{title}</ButtonText>
    </ChallengeButton>
  );
};

export const Options = ({ text, isSelected, select }) => {
  return (
    <Option
      onPress={select}
      style={{ backgroundColor: isSelected ? "#0e4a86" : "#fff" }}
    >
      <OptionText style={{ color: isSelected ? "#fff" : "#000" }}>
        {text}
      </OptionText>
    </Option>
  );
};
