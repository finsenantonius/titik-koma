import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import { StyleSheet } from "react-native";

export const SkeletonLeaderboard = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: 100, height: 20, marginBottom: 4 }]}
      containerStyle={styles.name}
    >
      {children}
    </SkeletonContent>
  );
};

export const SkeletonImageLeaderboard = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: 50, height: 50 }]}
      containerStyle={styles.image}
    >
      {children}
    </SkeletonContent>
  );
};

const styles = StyleSheet.create({
  name: {
    marginTop: 4,
  },
  image: {
    margin: 0,
  },
});
