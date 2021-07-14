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

export const SkeletonImageProfile = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: 40, height: 40 }]}
      containerStyle={styles.image}
    >
      {children}
    </SkeletonContent>
  );
};

export const SkeletonName = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: 95, height: 26.3 }]}
      containerStyle={styles.image}
    >
      {children}
    </SkeletonContent>
  );
};

export const SkeletonChallenge = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: "100%", height: 82, marginVertical: 6 }]}
      containerStyle={styles.challenge}
    >
      {children}
    </SkeletonContent>
  );
};

export const SkeletonNews = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: "100%", height: 125 }]}
      containerStyle={styles.news}
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
  challenge: {
    marginTop: 8,
  },
  news: {
    margin: 0,
  },
});
