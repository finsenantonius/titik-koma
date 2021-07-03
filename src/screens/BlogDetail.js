import React from "react";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { BlogHeader } from "../components/Header";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: #fff;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
`;

const Author = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 14px;
  color: #000;
  margin-bottom: 4px;
  color: #0e4a86;
  margin-right: 4px;
`;

const Symbol = styled(Text)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.body};
  color: #616161;
`;

const DatePublish = styled(Text)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.body};
  color: #616161;
  margin-left: 4px;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 20px;
  color: #000;
  margin-bottom: 8px;
`;

const Content = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.body};
  color: #000000;
  line-height: 30px;
`;

export const BlogDetailScreen = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeArea>
      <BlogHeader navigate={() => navigation.goBack()} title="Blog" />
      <ScrollView>
        <Container>
          <Wrapper>
            <Author>{data.author}</Author>
            <Symbol> • </Symbol>
            <DatePublish>{data.datePublish}</DatePublish>
          </Wrapper>
          <Title>{data.title}</Title>
          <Content>1. Titik Koma mobile app for user</Content>
          <Content>2. Titik Koma website for admin</Content>
          <Content></Content>
          <Content>Titik Koma dev test script:</Content>

          <Content>- Test login (success)</Content>
          <Content>- Test register (success)</Content>
          <Content>- Test logout (success)</Content>
          <Content>- Test change avatar pic (success)</Content>
          <Content>- Test change name (success)</Content>
          <Content>- Test change password (success)</Content>
          <Content>- Test voucher code: TITIKKOMA2021 (success)</Content>
          <Content>- Test submit feedback (success)</Content>
          <Content>- Test rate app: redirect to play store (success)</Content>
          <Content>- Test reward (success)</Content>
          <Content>- Test course list (success)</Content>
          <Content>- Test course detail (success)</Content>
          <Content>- Test leaderboard logic (success)</Content>
          <Content>- Test leaderboard (success)</Content>
          <Content>- Test challenge (success)</Content>
          <Content>- Test blog detail (success)</Content>
          <Content>- Test offline mode: (success)</Content>
          <Content>1. close app</Content>
          <Content>2. turn off wifi / data celular</Content>
          <Content>3. open app</Content>
          <Content></Content>
          <Content></Content>
          <Content>User Interface & User Experience: </Content>
          <Content>- Test navigation (success)</Content>
          <Content>- Test skeleton loading dashboard (success)</Content>
          <Content>- Test skeleton loading course (success)</Content>
          <Content>
            - Test skeleton loading leaderboard & challenge (success)
          </Content>
          <Content>- Test alert invalid password login (success)</Content>
          <Content>- Test modal pop-up logout (success)</Content>
          <Content>- Test alert success redeem voucher code (success)</Content>
          <Content>- Test alert invalid voucher code (success)</Content>
          <Content>- Test alert already redeem voucher code (success)</Content>
          <Content>- Test unlock course after redeem voucher (success)</Content>
          <Content>- Test alert change password (success)</Content>
          <Content>- Test splash screen (success)</Content>
          <Content>- Test app icon (success)</Content>
          <Content></Content>
          <Content>developed by finsen for thesis purpose</Content>
          <Content>7 Apr - 3 Jul 2021</Content>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
