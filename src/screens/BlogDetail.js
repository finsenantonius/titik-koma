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
          <Content>
            My Frameworks are our life. Without them any project is impossible.
            Frameworks are software that simplify the development process and
            different modules assembly. The main framework task is to help a
            developer. The code created in JS frameworks can be used in typical
            problem solving. Web sites and web apps are built based on it. New
            frameworks appear once a year or more often. Some years are rich in
            fresh technologies, but 2020 is not such a fruitful one because of
            the pandemic. What is more, in the design realm trends arise every
            couple of months and are picked up by design agencies. As for
            frontend development, it’s hard for new technologies to become a
            trend. There are three great JS frameworks with strong IT
            communities: React, Vue, and Angular. They are not the latest trends
            in front end development, but really appreciated technologies.
          </Content>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
