import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Spacer } from "../components/Spacer";
import { Banner } from "../components/Banner";
import { SkeletonImageProfile, SkeletonName } from "../components/Skeleton";
import { UserContext } from "../context/UserContext";

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

const LogoContainer = styled(View)`
  flex-direction: row;
  padding-horizontal: 16px;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
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

const Logo = styled(Text)`
  font-family: Jakarta-Sans;
  font-size: 24px;
  color: #0e4a86;
  letter-spacing: 1px;
`;

const ProfilePicture = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const MainBanner = styled(View)`
  background-color: #0e4a86;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 20px;
`;

const BannerSection = styled(View)`
  width: 50%;
  height: 100%;
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
  justify-content: center;
  align-items: center
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
`;

const BannerImage = styled(Image)`
  height: 100%;
  width: 150px;
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
  margin-bottom: 20px;
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
  justify-content: center;
  align-items: center
`;

const OfflineContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OfflineText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 14px;
  color: #616161;
  margin-top: 8px;
`;

const OfflineText2 = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 14px;
  color: #000;
`;

export const DashboardScreen = ({ navigation }) => {
  const { name, avatar, getUser, connect, loadUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  const navigate = () => {
    navigation.navigate("BlogList");
  };

  return (
    <SafeArea>
      <Container>
        <LogoContainer>
          <Logo>titik koma;</Logo>
          <OfflineText style={{ display: connect ? "none" : "flex" }}>
            Offline Mode
          </OfflineText>
        </LogoContainer>

        <ScrollView>
          <ProfileContainer style={{ marginTop: 4 }}>
            <View style={{ justifyContent: "center" }}>
              <HeadingText>Welcome Back,</HeadingText>
              <SkeletonName load={loadUser}>
                <Name>{connect ? name : "User"}</Name>
              </SkeletonName>
            </View>

            {connect ? (
              <SkeletonImageProfile load={loadUser}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <ProfilePicture source={avatar} />
                </TouchableOpacity>
              </SkeletonImageProfile>
            ) : null}
          </ProfileContainer>

          <Spacer>
            {!connect ? (
              <Banner navigate={navigate} isOffline={connect} />
            ) : null}
            <MainBanner>
              <BannerSection>
                <BannerText>What do you want to learn today ?</BannerText>
                <Button
                  disabled={connect ? false : true}
                  onPress={() => navigation.navigate("ModulList")}
                  style={{ backgroundColor: connect ? "orange" : "#ffd994" }}
                >
                  <ButtonText>Get Started</ButtonText>
                </Button>
              </BannerSection>
              <BannerImage source={require("../../assets/character.png")} />
            </MainBanner>

            <CourseHeader>Popular Course</CourseHeader>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <CourseCard1
                disabled={connect ? false : true}
                onPress={() => {
                  navigation.navigate("CourseList", {
                    courseName: "Javascript",
                  });
                }}
              >
                <CourseName>Javascript</CourseName>
                <View>
                  <CourseIcon
                    source={{
                      uri: "https://titik-koma-assets.herokuapp.com/image/a74bf0b2d12af5eef735dcad0765f1de.png",
                    }}
                  />
                </View>
              </CourseCard1>
              <CourseCard3
                disabled={connect ? false : true}
                onPress={() => {
                  navigation.navigate("CourseList", {
                    courseName: "React",
                  });
                }}
              >
                <CourseName>React</CourseName>
                <CourseIcon
                  source={{
                    uri: "https://titik-koma-assets.herokuapp.com/image/ff29af7f13d19f908f5964f49e375107.png",
                  }}
                />
              </CourseCard3>
            </View>

            <CourseHeader>Challenges</CourseHeader>
            <CompetitionBanner>
              <CompetitionImage
                source={require("../../assets/character2.png")}
              />
              <View style={{ padding: 16 }}>
                <CompetitionText>10-days challenge</CompetitionText>
                <CompetitionText2>Beginner Level</CompetitionText2>
                <CompetitionButton
                  disabled={connect ? false : true}
                  style={{ backgroundColor: connect ? "orange" : "#ffd994" }}
                  onPress={() => navigation.navigate("CompetitionList")}
                >
                  <ButtonText>Join Now</ButtonText>
                </CompetitionButton>
              </View>
            </CompetitionBanner>

            {connect ? (
              <Banner navigate={navigate} isOffline={connect} />
            ) : null}
          </Spacer>
        </ScrollView>
      </Container>
    </SafeArea>
  );
};
