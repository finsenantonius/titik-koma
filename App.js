import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  useFonts as usePlayfair,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";

import { theme } from "./src/theme";
import { SigninScreen } from "./src/screens/SigninScreen";
import { SignupScreen } from "./src/screens/SignupScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { UserProfileScreen } from "./src/screens/UserProfileScreen";
import { VoucherScreen } from "./src/screens/VoucherScreen";
import { RewardScreen } from "./src/screens/RewardScreen";
import { ChangePasswordScreen } from "./src/screens/ChangePasswordScreen";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Signin" component={SigninScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Profile" component={UserProfileScreen} />
    <Stack.Screen name="Voucher" component={VoucherScreen} />
    <Stack.Screen name="Reward" component={RewardScreen} />
    <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
  </Stack.Navigator>
);

export default function App() {
  let [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  let [playfairLoaded] = usePlayfair({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
  });

  if (!poppinsLoaded || !playfairLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
