import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Linking,
} from "react-native";
import { LogoutModal } from "../components/Modal";
import { Menu } from "../components/Menu";
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
`;

const ProfileContainer = styled(View)`
  height: 150px;
  border-radius: 20px;
  padding: 12px;
  flex-direction: row;
`;

const MenuContainer = styled(View)`
  background-color: #fff;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 20px;
  flex: 1;
`;

const ProfilePicture = styled(Image)`
  width: 125px;
  height: 125px;
  border-radius: 15px;
  margin-right: 12px;
`;

const Name = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 24px;
  color: black;
  margin-bottom: -5px;
`;

const Bio = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #616161;
`;

const EditButton = styled(TouchableOpacity)`
  height: 40px;
  width: 150px;
  border-radius: 10px;
  background-color: orange;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
`;

const MenuTitleText = styled(Text)`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #0e4a86;
`;

const MenuSection = styled(View)`
  height: 120px;
  border-radius: 10px
  background-color: #FFF;
  elevation: 2;
  margin-bottom: 16px
`;

const Border = styled(View)`
  border-bottom-color: whitesmoke;
  border-width: 0.5px;
`;

const openPlayStore = () => {
  const GOOGLE_PACKAGE_NAME = "com.whatsapp";
  Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`);
};

export const UserProfileScreen = ({ navigation }) => {
  const { name, avatar, getUser } = useContext(UserContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    navigation.addListener("focus", () => getUser());
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Profile" />
      <ScrollView>
        <Container>
          <ProfileContainer>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangePhoto")}
            >
              <ProfilePicture source={avatar} />
            </TouchableOpacity>
            <View style={{ justifyContent: "space-between" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Name>{name}</Name>
              </View>

              <EditButton onPress={() => navigation.navigate("EditProfile")}>
                <ButtonText>Edit Profile</ButtonText>
              </EditButton>
            </View>
          </ProfileContainer>
          <MenuContainer>
            <MenuTitleText>Akun</MenuTitleText>
            <MenuSection>
              <Menu
                iconName="local-offer"
                title="Kode Voucher"
                navigate={() => navigation.navigate("Voucher")}
              />
              <Border />
              <Menu
                iconName="redeem"
                title="Reward Saya"
                navigate={() => navigation.navigate("Reward")}
              />
            </MenuSection>

            <MenuTitleText>Pusat Bantuan</MenuTitleText>
            <MenuSection>
              <Menu
                iconName="feedback"
                title="Feedback"
                navigate={() => navigation.navigate("Feedback")}
              />
              <Border />
              <Menu
                iconName="star-border"
                title="Nilai Kami"
                navigate={openPlayStore}
              />
            </MenuSection>

            <MenuTitleText>Pengaturan</MenuTitleText>
            <MenuSection>
              <Menu
                iconName="lock"
                title="Ubah Password"
                navigate={() => navigation.navigate("ChangePassword")}
              />
              <Border />
              <Menu iconName="logout" title="Keluar" navigate={toggleModal} />
              <LogoutModal visible={isModalVisible} closeModal={toggleModal} />
            </MenuSection>
          </MenuContainer>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
