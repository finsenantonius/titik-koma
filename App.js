import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";
import { UserProvider } from "./src/context/UserContext";

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
import { EditProfileScreen } from "./src/screens/EditProfile";
import { CourseListScreen } from "./src/screens/CourseList";
import { CompetitionListScreen } from "./src/screens/CompetitionList";
import { SplashScreen } from "./src/screens/SplashScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator headerMode="none">
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Profile" component={UserProfileScreen} />
          <Stack.Screen name="Voucher" component={VoucherScreen} />
          <Stack.Screen name="Reward" component={RewardScreen} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="CourseList" component={CourseListScreen} />
          <Stack.Screen
            name="CompetitionList"
            component={CompetitionListScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

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
      <AuthProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <AuthStack />
            </NavigationContainer>
          </ThemeProvider>
        </UserProvider>
      </AuthProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
