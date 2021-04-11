import React from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import { Spacer } from "../components/Spacer";
import { MaterialIcons } from "@expo/vector-icons";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: whitesmoke;
`;

const Container = styled(View)`
  flex: 1;
  background-color: whitesmoke;
`;

const HeaderContainer = styled(View)`
  height: 50px;
  padding: 16px;
  flex-direction: row;
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
  width: 220px
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
  height: 180px;
  border-radius: 10px
  background-color: #FFF;
  elevation: 2;
  margin-bottom: 16px
`;

const Menu = styled(TouchableOpacity)`
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

const Border = styled(View)`
  border-bottom-color: whitesmoke;
  border-width: 0.3px;
`;

export const UserProfileScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" style={styles.icon} />
            </TouchableOpacity>
          </HeaderContainer>
          <ProfileContainer>
            <ProfilePicture source={require("../../assets/giraffe.png")} />
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Name>Finsen Antonius</Name>
                <MaterialIcons name="verified" style={styles.verified} />
              </View>
              <Bio>Suka ngoding</Bio>

              <EditButton>
                <ButtonText>Edit Profile</ButtonText>
              </EditButton>
            </View>
          </ProfileContainer>
          <MenuContainer>
            <MenuTitleText>Akun</MenuTitleText>
            <MenuSection>
              <Menu>
                <Wrapper>
                  <MaterialIcons name="local-offer" style={styles.icon} />
                  <MenuText>Kode Voucher</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
              <Border />
              <Menu>
                <Wrapper>
                  <MaterialIcons name="redeem" style={styles.icon} />
                  <MenuText>Reward Saya</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
              <Border />
              <Menu>
                <Wrapper>
                  <MaterialIcons name="people-alt" style={styles.icon} />
                  <MenuText>Undang Teman</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
            </MenuSection>

            <MenuTitleText>Pusat Bantuan</MenuTitleText>
            <MenuSection>
              <Menu>
                <Wrapper>
                  <MaterialIcons name="help-outline" style={styles.icon} />
                  <MenuText>Bantuan</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
              <Border />
              <Menu>
                <Wrapper>
                  <MaterialIcons name="feedback" style={styles.icon} />
                  <MenuText>Feedback</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
              <Border />
              <Menu>
                <Wrapper>
                  <MaterialIcons name="star-border" style={styles.icon} />
                  <MenuText>Nilai Kami</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
            </MenuSection>

            <MenuTitleText>Pengaturan</MenuTitleText>
            <MenuSection style={{ height: 120 }}>
              <Menu>
                <Wrapper>
                  <MaterialIcons name="lock" style={styles.icon} />
                  <MenuText>Ubah Password</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
              <Border />
              <Menu>
                <Wrapper>
                  <MaterialIcons name="logout" style={styles.icon} />
                  <MenuText>Keluar</MenuText>
                </Wrapper>
                <MaterialIcons name="chevron-right" style={styles.arrow} />
              </Menu>
            </MenuSection>
          </MenuContainer>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "black",
    fontSize: 22,
    marginRight: 12,
    alignSelf: "center",
  },
  verified: {
    color: "skyblue",
    fontSize: 20,
    marginLeft: 4,
  },
  arrow: {
    color: "black",
    fontSize: 22,
    alignSelf: "center",
  },
});
