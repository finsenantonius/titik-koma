import React, { useEffect, useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList, Text } from "react-native";
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

const NoBlogs = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: #0e4a86;
  margin-top: 16px;
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
          {news.length === 0 ? (
            <View style={{ alignItems: "center" }}>
              <NoBlogs>blog belum tersedia saat ini.</NoBlogs>
            </View>
          ) : null}
        </SkeletonNews>
      </Container>
    </SafeArea>
  );
};
