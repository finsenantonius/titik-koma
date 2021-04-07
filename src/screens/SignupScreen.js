import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title="Sign in" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
};

const styles = StyleSheet.create({});
