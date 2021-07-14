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
            <Author>{data.newsAuthor}</Author>
            <Symbol> • </Symbol>
            <DatePublish>{data.newsUploadDate}</DatePublish>
          </Wrapper>
          <Title>{data.newsTitle}</Title>
          <Content>{data.newsContent}</Content>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
