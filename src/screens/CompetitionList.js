import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { ChallengeCard } from "../components/ChallengeCard";
import { Header } from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: whitesmoke;
  flex: 1;
`;

const Container = styled(View)`
  background-color: whitesmoke;
  flex: 1;
`;

const LeaderboardContainer = styled(View)`
  height: 180px;
  border-radius: 20px;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
`;

const ProfileContainer = styled(View)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
`;

const MenuContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 20px;
`;

const ProfilePicture = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  border-width: 2px
  border-color: #0e4a86;
`;

const ProfilePictureBig = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  border-width: 2px
  border-color: #0e4a86;
`;

const Rank = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: black;
`;

const Icon = styled(FontAwesome5)`
  font-size: 18px;
  align-self: center;
  margin-bottom: 4px;
`;

const Name = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: black;
  justify-content: flex-end;
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

const Border = styled(View)`
  border-bottom-color: whitesmoke;
  border-width: 0.5px;
`;

const openPlayStore = () => {
  const GOOGLE_PACKAGE_NAME = "com.whatsapp";
  Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`);
};

export const CompetitionListScreen = ({ navigation }) => {
  const { leaderboard, getLeaderboard } = useContext(UserContext);
  const [isModalVisible, setModalVisible] = useState(false);
  console.log(leaderboard[0]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Competition" />
      <Container>
        <LeaderboardContainer>
          <ProfileContainer>
            <Rank>2</Rank>
            <ProfilePicture source={require("../../assets/giraffe.png")} />
            <Name>{leaderboard[1].name}</Name>
            <Name>{leaderboard[1].score}</Name>
          </ProfileContainer>

          <ProfileContainer>
            <Icon name="crown" />
            <ProfilePictureBig source={require("../../assets/giraffe.png")} />
            <Name>{leaderboard[0].name}</Name>
            <Name>{leaderboard[0].score}</Name>
          </ProfileContainer>

          <ProfileContainer>
            <Rank>3</Rank>
            <ProfilePicture source={require("../../assets/giraffe.png")} />
            <Name>{leaderboard[2].name}</Name>
            <Name>{leaderboard[2].score}</Name>
          </ProfileContainer>
        </LeaderboardContainer>

        <MenuContainer>
          <MenuTitleText>Competition</MenuTitleText>
          <ChallengeCard navigate={() => navigation.navigate("Challenge1")} />
        </MenuContainer>
      </Container>
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
