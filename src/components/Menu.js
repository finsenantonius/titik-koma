import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled(TouchableOpacity)`
  padding: 16px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled(View)`
  flex-direction: row;
`;

const MenuText = styled(Text)`
  font-size: 16px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
  align-self: center
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

export const Menu = ({ iconName, title, navigate }) => {
  return (
    <Container onPress={navigate}>
      <Wrapper>
        <Icon name={iconName} />
        <MenuText>{title}</MenuText>
      </Wrapper>
      <Arrow name="chevron-right" />
    </Container>
  );
};
