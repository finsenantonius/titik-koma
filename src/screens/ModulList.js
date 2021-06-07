import React, { useEffect, useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Modul } from "../components/Course";
import { Header } from "../components/Header";
import { CourseContext } from "../context/CourseContext";
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

export const ModulListScreen = ({ navigation }) => {
  const { getAllModul, modul, loadModul, setCourse, setloadCourse } =
    useContext(CourseContext);

  const navigate = (courseName) => {
    navigation.navigate("CourseList", {
      courseName: courseName,
    });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setCourse([]);
      setloadCourse(true);
    });
    getAllModul();
  }, []);

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Course" />
      <Container>
        <SkeletonModul load={loadModul}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={modul}
            keyExtractor={(modul) => modul.modulName}
            renderItem={({ item }) => {
              return (
                <Modul data={item} navigate={() => navigate(item.modulName)} />
              );
            }}
          />
        </SkeletonModul>
      </Container>
    </SafeArea>
  );
};
