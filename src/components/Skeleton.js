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

export const SkeletonVideo = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: "100%", height: 225 }]}
      containerStyle={styles.video}
    >
      {children}
    </SkeletonContent>
  );
};

export const SkeletonModul = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[
        { width: "100%", height: 82, marginVertical: 6 },
        { width: "100%", height: 82, marginVertical: 6 },
      ]}
      containerStyle={styles.modul}
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
  video: {
    margin: 0,
  },
  modul: {
    marginTop: 8,
  },
});
