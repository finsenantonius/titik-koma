import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Course } from "../components/Course";
import { Header } from "../components/Header";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: whitesmoke;
`;

const Container = styled(View)`
  flex: 1;
  background-color: whitesmoke;
  padding-horizontal: 16px;
`;

const course = [
  {
    name: "Javascript",
    description: "belajar dasar javascript",
  },
  {
    name: "React",
    description: "belajar dasar react",
  },
];

export const CourseListScreen = ({ navigation }) => {
  const navigate = (courseName) => {
    navigation.navigate("CourseDetail", {
      courseName: courseName,
    });
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Course" />
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={course}
          keyExtractor={(course) => course.name}
          renderItem={({ item }) => {
            return <Course data={item} navigate={() => navigate(item.name)} />;
          }}
        />
      </Container>
    </SafeArea>
  );
};
