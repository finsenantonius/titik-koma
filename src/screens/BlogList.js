import React, { useEffect, useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { BlogCard } from "../components/Card";
import { BlogHeader } from "../components/Header";
import { CourseContext } from "../context/CourseContext";
import { UserContext } from "../context/UserContext";
import { SkeletonNews } from "../components/Skeleton";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: #fff;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const BlogListScreen = ({ navigation }) => {
  const { getAllNews, news, loadNews } = useContext(CourseContext);
  const { connect } = useContext(UserContext);

  console.log(connect);
  const navigate = (newsData) => {
    navigation.navigate("BlogDetail", {
      data: newsData,
    });
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <SafeArea>
      <BlogHeader navigate={() => navigation.goBack()} title="Blog" />
      <Container>
        <SkeletonNews load={loadNews}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={news}
            keyExtractor={(news) => news.newsTitle}
            renderItem={({ item }) => {
              return <BlogCard data={item} navigate={() => navigate(item)} />;
            }}
          />
        </SkeletonNews>
      </Container>
    </SafeArea>
  );
};
