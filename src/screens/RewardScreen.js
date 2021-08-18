import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
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
  align-items: center;
`;

const NoReward = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: #0e4a86;
  margin-bottom: 16px;
`;

const Card = styled(TouchableOpacity)`
  height: 82px;
  width: 100%;
  border-radius: 10px;
  background-color: #FFF
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  elevation: 2;
  margin-vertical: 6px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
`;

const TitleContainer = styled(View)`
  justify-content: center;
`;

const CourseName = styled(Text)`
  font-size: 18px
  font-family: ${(props) => props.theme.fonts.body};
  color: black;
`;

const CourseIcon = styled(Image)`
  height: 50px;
  width: 50px;
  margin-right: 12px;
`;

export const RewardScreen = ({ navigation }) => {
  const { isRedeemVoucher, getReward, reward } = useContext(UserContext);

  useEffect(() => {
    getReward();
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Reward" />
      <Container>
        {isRedeemVoucher ? (
          <Card
            onPress={() =>
              navigation.navigate("CourseList", {
                courseName: reward.modulName,
              })
            }
          >
            <Wrapper>
              <CourseIcon
                source={{
                  uri: reward.rewardThumbnail,
                }}
              />
              <TitleContainer>
                <CourseName>{reward.rewardName}</CourseName>
              </TitleContainer>
            </Wrapper>
          </Card>
        ) : (
          <NoReward>Kamu tidak punya reward saat ini.</NoReward>
        )}
      </Container>
    </SafeArea>
  );
};
