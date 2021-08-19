import React, { useState, useEffect, useContext, useRef } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { Video } from "expo-av";
import styled from "styled-components/native";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "../components/Header";
import { SkeletonVideo } from "../components/Skeleton";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: whitesmoke;
`;

const Container = styled(View)`
  flex: 1;
  background-color: whitesmoke;
`;

const ContentContainer = styled(View)`
  flex: 1;
`;

const CourseHeader = styled(Text)`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #000000;
`;

const DescriptionText = styled(Text)`
  font-size: 14px
  font-family: ${(props) => props.theme.fonts.body};
  color: #616161;
`;

const Section = styled(View)`
  background-color: white;
  padding: 12px;
  margin-bottom: 8px;
`;

const Table = styled(View)`
  flex-direction: row;
  justify-content: space-between
  border-bottom-width: 1px;
  border-bottom-color: grey;
  padding-vertical: 8px
`;

const TableText = styled(Text)`
  font-size: 14px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
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
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #305f72;
`;

const CompetitionText2 = styled(Text)`
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #616161;
  margin-bottom: 4px;
`;

const CompetitionButton = styled(TouchableOpacity)`
  height: 35px;
  width: 100px;
  background-color: orange
  border-radius: 10px;
  justify-content: center;
  align-items: center
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
`;

export const CourseDetailScreen = ({ route, navigation }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false);
  const { courseName, data } = route.params;

  let videoAssets;
  if (data.courseTitle === "NodeJS - Introduction") {
    videoAssets = require("../../assets/video/nodejs1.mp4");
  } else if (data.courseTitle === "NodeJS - Routing") {
    videoAssets = require("../../assets/video/nodejs2.mp4");
  } else {
    videoAssets = { uri: data.courseFile };
  }

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title={courseName} />
      <ScrollView>
        <Container>
          <SkeletonVideo load={loading}>
            <Video
              onFullscreenUpdate={async () => {
                await ScreenOrientation.lockAsync(
                  orientationIsLandscape
                    ? ScreenOrientation.OrientationLock.PORTRAIT
                    : ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                );
                setOrientationIsLandscape(!orientationIsLandscape);
              }}
              source={videoAssets}
              ref={video}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </SkeletonVideo>

          <ContentContainer>
            <Section>
              <CourseHeader>{data.courseTitle}</CourseHeader>
              <DescriptionText>{data.courseDescription}</DescriptionText>
            </Section>
            <Section>
              <CourseHeader style={{ marginBottom: 10 }}>
                Detail Kelas
              </CourseHeader>

              <Table>
                <TableText>Bahasa Pemograman</TableText>
                <DescriptionText>{data.courseLanguage}</DescriptionText>
              </Table>
              <Table>
                <TableText>Tingkat</TableText>
                <DescriptionText>{data.courseLevel}</DescriptionText>
              </Table>
              <Table>
                <TableText>Dibuat Pada</TableText>
                <DescriptionText>{data.courseCreated}</DescriptionText>
              </Table>
              <Table>
                <TableText>Dibuat Oleh</TableText>
                <DescriptionText>{data.courseAuthor}</DescriptionText>
              </Table>
            </Section>

            <Section>
              <CourseHeader>Challenge</CourseHeader>
              <CompetitionBanner>
                <CompetitionImage
                  source={require("../../assets/character2.png")}
                />
                <View style={{ padding: 16 }}>
                  <CompetitionText>Kuis teknologi</CompetitionText>
                  <CompetitionText2>Beginner Level</CompetitionText2>
                  <CompetitionButton
                    onPress={() => navigation.navigate("CompetitionList")}
                  >
                    <ButtonText>Gabung</ButtonText>
                  </CompetitionButton>
                </View>
              </CompetitionBanner>
            </Section>
          </ContentContainer>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: "100%",
    height: 225,
  },
});
