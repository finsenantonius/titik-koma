import React, { useEffect, useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Course } from "../components/Course";
import { Header } from "../components/Header";
import { CourseContext } from "../context/CourseContext";
import { UserContext } from "../context/UserContext";
import { SkeletonModul } from "../components/Skeleton";

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

export const CourseListScreen = ({ route, navigation }) => {
  const { getCourse, course, loadCourse } = useContext(CourseContext);
  const { isRedeemVoucher } = useContext(UserContext);
  const navigate = (courseName, courseData) => {
    navigation.navigate("CourseDetail", {
      courseName: courseName,
      data: courseData,
    });
  };

  const { courseName } = route.params;
  useEffect(() => {
    getCourse({ courseName });
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title={courseName} />
      <Container>
        <SkeletonModul load={loadCourse}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={course}
            keyExtractor={(course) => course.courseTitle}
            renderItem={({ item }) => {
              return (
                <Course
                  data={item}
                  navigate={() => navigate(item.courseName, item)}
                  isRedeemVoucher={isRedeemVoucher}
                />
              );
            }}
          />
        </SkeletonModul>
      </Container>
    </SafeArea>
  );
};
