import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";
import { UserProvider } from "./src/context/UserContext";
import { CourseProvider } from "./src/context/CourseContext";
import { useFonts } from "expo-font";

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
import { ModulListScreen } from "./src/screens/ModulList";
import { CourseListScreen } from "./src/screens/CourseList";
import { CourseDetailScreen } from "./src/screens/CourseDetail";
import { CompetitionListScreen } from "./src/screens/CompetitionList";
import { ChangePhotoScreen } from "./src/screens/ChangePhotoScreen";
import { SplashScreen } from "./src/screens/SplashScreen";

import { Challenge1 } from "./src/screens/challenges/Challenge1";
import { Challenge2 } from "./src/screens/challenges/Challenge2";
import { Challenge3 } from "./src/screens/challenges/Challenge3";
import { Challenge4 } from "./src/screens/challenges/Challenge4";
import { Challenge5 } from "./src/screens/challenges/Challenge5";

const Stack = createStackNavigator();

const AuthStack = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
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
          <Stack.Screen name="ChangePhoto" component={ChangePhotoScreen} />
          <Stack.Screen name="ModulList" component={ModulListScreen} />
          <Stack.Screen name="CourseList" component={CourseListScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          <Stack.Screen
            name="CompetitionList"
            component={CompetitionListScreen}
          />
          <Stack.Screen name="Challenge1" component={Challenge1} />
          <Stack.Screen name="Challenge2" component={Challenge2} />
          <Stack.Screen name="Challenge3" component={Challenge3} />
          <Stack.Screen name="Challenge4" component={Challenge4} />
          <Stack.Screen name="Challenge5" component={Challenge5} />
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

  let [jakartaLoaded] = useFonts({
    "Jakarta-Sans": require("./assets/fonts/PlusJakartaDisplay-Bold.otf"),
  });

  if (!poppinsLoaded || !playfairLoaded || !jakartaLoaded) {
    return null;
  }

  return (
    <>
      <AuthProvider>
        <UserProvider>
          <CourseProvider>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                <AuthStack />
              </NavigationContainer>
            </ThemeProvider>
          </CourseProvider>
        </UserProvider>
      </AuthProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
