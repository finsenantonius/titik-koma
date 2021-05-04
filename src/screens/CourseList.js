import React, { useState } from "react";
import styled from "styled-components/native";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
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
    name: "C++",
    description: "belajar dasar c++",
  },
  {
    name: "Java",
    description: "belajar dasar java",
  },
  {
    name: "HTML",
    description: "belajar dasar html",
  },
  {
    name: "CSS",
    description: "belajar dasar css",
  },
  {
    name: "React",
    description: "belajar dasar react",
  },
  {
    name: "Test data",
    description: "test scroll",
  },
  {
    name: "Test data1",
    description: "test scroll",
  },
  {
    name: "Test data2",
    description: "test scroll",
  },
];

export const CourseListScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Course" />
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={course}
          keyExtractor={(course) => course.name}
          renderItem={({ item }) => {
            return <Course data={item} />;
          }}
        />
      </Container>
    </SafeArea>
  );
};
