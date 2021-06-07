import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled(View)`
  flex: 1;
  justify-content: center
  align-items: center;
  background-color: #0e4a86;
`;

const Logo = styled(Text)`
  font-family: Jakarta-Sans;
  font-size: 64px;
  color: #fff;
  align-self: flex-end;
  letter-spacing: 4px;
`;

export const SplashScreen = () => {
  return (
    <Container>
      <View>
        <Logo>titik.</Logo>
        <Logo style={{ marginTop: -25 }}>koma,</Logo>
      </View>
    </Container>
  );
};
