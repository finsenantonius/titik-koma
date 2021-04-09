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
} from "react-native";
import { Spacer } from "../components/Spacer";
import { Feather } from "@expo/vector-icons";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: #fff;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  padding-top: 12px;
`;

const ProfileContainer = styled(View)`
  flex-direction: row;
  padding-horizontal: 16px;
  justify-content: space-between;
`;

const HeadingText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 14px;
  color: #616161;
`;

const Name = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 18px;
`;

const ProfilePicture = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const SearchContainer = styled(View)`
  flex-direction: row;
  background-color: whitesmoke;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Icon = styled(Feather)`
  font-size: 22px;
  align-self: center;
  color: orange;
  margin-horizontal: 10px;
`;

const SearchBar = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  padding-right: 10px;
`;

const MainBanner = styled(View)`
  height: 190px;
  background-color: #0e4a86;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 20px;
`;

const BannerSection = styled(View)`
  width: 50%;
  padding: 20px;
  margin-right: 20px;
`;

const BannerText = styled(Text)`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
  margin-bottom: 10px;
`;

const Button = styled(TouchableOpacity)`
  height: 40px;
  width: 80%
  border-radius: 10px;
  background-color: orange;
  justify-content: center;
  align-items: center
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
`;

const BannerImage = styled(Image)`
  height: 190px;
  width: 135px;
`;

const CourseHeader = styled(Text)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #24253d;
  margin-bottom: 10px;
`;

const CourseCard1 = styled(TouchableOpacity)`
  height: 110px;
  width: 180px;
  background-color: #fff5e5;
  border-radius: 10px;
  padding: 16px;
`;

const CourseCard2 = styled(TouchableOpacity)`
  height: 110px;
  width: 180px;
  background-color: #fff1ef;
  border-radius: 10px;
`;

const CourseCard3 = styled(TouchableOpacity)`
  height: 110px;
  width: 180px;
  background-color: #eaf9fe;
  border-radius: 10px;
  padding: 16px;
`;

const CourseName = styled(Text)`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.body};
  color: #305f72;
`;

const CourseIcon = styled(Image)`
  height: 50px;
  width: 50px;
  align-self: flex-end;
`;

const CompetitionBanner = styled(View)`
  height: 120px;
  background-color: #fbf5ff;
  border-radius: 10px;
  flex-direction: row;
  elevation: 3;
  padding-left: 20px;
`;

const CompetitionImage = styled(Image)`
  height: 121px;
  width: 80px;
  margin-right: 20px;
`;

const CompetitionText = styled(Text)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #305f72;
`;

const CompetitionText2 = styled(Text)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #616161;
  margin-bottom: 4px;
`;

const CompetitionButton = styled(TouchableOpacity)`
  height: 35px;
  width: 60%
  border-radius: 10px;
  background-color: orange;
  justify-content: center;
  align-items: center
`;

export const DashboardScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <ProfileContainer>
          <View style={{ justifyContent: "center" }}>
            <HeadingText>Welcome Back,</HeadingText>
            <Name>Finsen Antonius</Name>
          </View>

          <ProfilePicture source={require("../../assets/giraffe.png")} />
        </ProfileContainer>

        <Spacer>
          <SearchContainer>
            <Icon name="search" />
            <SearchBar placeholder="Search" />
          </SearchContainer>

          <MainBanner>
            <BannerSection>
              <BannerText>What do you want to learn today ?</BannerText>
              <Button>
                <ButtonText>Get Started</ButtonText>
              </Button>
            </BannerSection>
            <BannerImage source={require("../../assets/character.png")} />
          </MainBanner>

          <CourseHeader>Course</CourseHeader>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <CourseCard1>
              <CourseName>Javascript</CourseName>
              <View>
                <CourseIcon source={require("../../assets/js.png")} />
              </View>
            </CourseCard1>
            <CourseCard3>
              <CourseName>React</CourseName>
              <CourseIcon source={require("../../assets/js.png")} />
            </CourseCard3>
          </View>

          <CourseHeader>Challenges</CourseHeader>
          <CompetitionBanner>
            <CompetitionImage source={require("../../assets/character2.png")} />
            <View style={{ padding: 16 }}>
              <CompetitionText>10-days challenge</CompetitionText>
              <CompetitionText2>Beginner Level</CompetitionText2>
              <CompetitionButton>
                <ButtonText>Join Now</ButtonText>
              </CompetitionButton>
            </View>
          </CompetitionBanner>
        </Spacer>
      </Container>
    </SafeArea>
  );
};
