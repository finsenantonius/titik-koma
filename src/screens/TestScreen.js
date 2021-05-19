import React, { useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { LogoutModal } from "../components/Modal";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: yellow;
`;

const Container = styled(View)`
  flex: 1;
  background-color: blue;
`;

const MenuTest = styled(View)`
  background-color: green;
`;

export const TestScreen = ({ navigation }) => {
  return (
    <Container>
      <SafeArea>
        {/* <ScrollView> */}
        <MenuTest>
          <Text>Finsen</Text>
        </MenuTest>
        {/* </ScrollView> */}
      </SafeArea>
    </Container>
  );
};
