import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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

const Label = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: #0e4a86;
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
  background-color: #0e4a86;
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

export const EditProfileScreen = ({ navigation }) => {
  const { name, updateProfile, getCredential } = useContext(UserContext);
  const [inputName, setInputName] = useState(name);

  useEffect(() => {
    getCredential();
  }, []);

  const navigate = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Edit Profil" />
      <Container>
        <HeaderText>Ubah data diri Anda.</HeaderText>
        <Label>Nama</Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Name"
          placeholder="Masukkan nama"
          value={inputName}
          onChangeText={setInputName}
        />
        <Label>Bio</Label>
        <Input placeholder="Masukkan biodata" value="suka ngoding" />
        <Button onPress={() => updateProfile({ inputName, navigate })}>
          <ButtonText>Update Profil</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};
