import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-self: flex-end;
`;

export const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};
