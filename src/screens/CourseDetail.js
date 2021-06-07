import React, { useState, useEffect, useContext, useRef } from "react";
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
import { CourseContext } from "../context/CourseContext";
import { ChallengeCard } from "../components/ChallengeCard";
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

const CourseCard1 = styled(TouchableOpacity)`
  height: 110px;
  width: 180px;
  background-color: #fff5e5;
  border-radius: 10px;
  padding: 16px;
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

export const CourseDetailScreen = ({ route, navigation }) => {
  const { setCourse, setloadCourse } = useContext(CourseContext);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const { courseName, data } = route.params;

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
              source={require("../../assets/video/bifest.mp4")}
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
              <ChallengeCard
                navigate={() => navigation.navigate("Challenge1")}
              />
            </Section>

            <Section>
              <CourseHeader>Kelas Terkait</CourseHeader>
              {courseName === "Javascript" ? (
                <CourseCard3
                  key={data.courseName}
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
              ) : (
                <CourseCard1
                  key={data.courseName}
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
              )}
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
