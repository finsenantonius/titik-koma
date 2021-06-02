import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Header } from "../components/Header";
import { UserContext } from "../context/UserContext";
import { OptionImage } from "../components/Button";

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

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChangePhotoScreen = ({ navigation }) => {
  const { updateAvatar, getCredential } = useContext(UserContext);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    getCredential();
  }, []);

  const selectA = () => {
    setImage1(true);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setDisabled(false);
  };
  const selectB = () => {
    setImage1(false);
    setImage2(true);
    setImage3(false);
    setImage4(false);
    setDisabled(false);
  };
  const selectC = () => {
    setImage1(false);
    setImage2(false);
    setImage3(true);
    setImage4(false);
    setDisabled(false);
  };
  const selectD = () => {
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(true);
    setDisabled(false);
  };

  const navigate = () => {
    navigation.navigate("Profile");
  };

  const selectImage = () => {
    if (image1 === true) {
      updateAvatar({ avatar: 1, navigate });
    } else if (image2 === true) {
      updateAvatar({ avatar: 2, navigate });
    } else if (image3 === true) {
      updateAvatar({ avatar: 3, navigate });
    } else {
      updateAvatar({ avatar: 4, navigate });
    }
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Ubah Foto" />
      <Container>
        <HeaderText>Ubah foto profil Anda.</HeaderText>
        <Wrapper>
          <OptionImage
            image={require("../../assets/ava1.jpg")}
            isSelected={image1}
            select={() => selectA()}
          />
          <OptionImage
            image={require("../../assets/ava2.jpg")}
            isSelected={image2}
            select={() => selectB()}
          />
          <OptionImage
            image={require("../../assets/ava3.jpg")}
            isSelected={image3}
            select={() => selectC()}
          />
          <OptionImage
            image={require("../../assets/ava4.jpg")}
            isSelected={image4}
            select={() => selectD()}
          />
        </Wrapper>
        <Button
          onPress={selectImage}
          disabled={disabled}
          style={{ backgroundColor: disabled ? "#546e87" : "#0e4a86" }}
        >
          <ButtonText>Ubah Foto</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};
