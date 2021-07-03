import React, { useEffect, useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { BlogCard } from "../components/Card";
import { BlogHeader } from "../components/Header";
import { CourseContext } from "../context/CourseContext";

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
  const navigate = (courseData) => {
    navigation.navigate("BlogDetail", {
      data: courseData,
    });
  };

  const data = [
    {
      author: "Titik Koma Admin",
      thumbnail:
        "https://titik-koma-assets.herokuapp.com/image/a74bf0b2d12af5eef735dcad0765f1de.png",
      title: "Test Blog List & Detail",
      datePublish: "10 Jun 2021",
    },
  ];

  return (
    <SafeArea>
      <BlogHeader navigate={() => navigation.goBack()} title="Blog" />
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(data) => data.title}
          renderItem={({ item }) => {
            return <BlogCard data={item} navigate={() => navigate(item)} />;
          }}
        />
      </Container>
    </SafeArea>
  );
};
