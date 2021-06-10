import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
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

const Card = styled(View)`
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
  const { isRedeemVoucher } = useContext(UserContext);
  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Reward" />
      <Container>
        {isRedeemVoucher ? (
          <Card>
            <Wrapper>
              <CourseIcon
                source={{
                  uri: "https://titik-koma-assets.herokuapp.com/image/ff29af7f13d19f908f5964f49e375107.png",
                }}
              />
              <TitleContainer>
                <CourseName>React 2021</CourseName>
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
