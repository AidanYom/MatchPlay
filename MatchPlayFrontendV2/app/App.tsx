import React, { useEffect, useState } from "react";
import { useApp, useAuth, useQuery, useRealm, useUser } from "@realm/react";
import { Pressable, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home/HomeScreen";
import SignupScreen1 from "./screens/signup/SignupScreen1";
import { LoginScreen } from "./screens/login/LoginScreen";
import LoadStartScreen from "./screens/login/LoadStartScreen";
import CustomHeader from "./components/custom_header";

import { Task } from "./models/Task";
import { TaskManager } from "./components/TaskManager";
import { buttonStyles } from "./styles/button";
import { shadows } from "./styles/shadows";
import colors from "./styles/colors";
import { OfflineModeButton } from "./components/OfflineModeButton";
import SignupScreen2 from "./screens/signup/SignupScreen2";
import SignupScreen3 from "./screens/signup/SignupScreen3";
import SignupScreen4 from "./screens/signup/SignupScreen4";
import ReadyToEnter from "./screens/signup/ReadyToEnter";

export const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadStartScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            header: () => (
              <CustomHeader backAvailable={true} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="LoadStartScreen"
          component={LoadStartScreen}
          options={{
            header: () => (
              <CustomHeader backAvailable={false} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen1"
          component={SignupScreen1}
          options={{
            header: () => (
              <CustomHeader backAvailable={true} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen2"
          component={SignupScreen2}
          options={{
            header: () => (
              <CustomHeader backAvailable={true} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen3"
          component={SignupScreen3}
          options={{
            header: () => (
              <CustomHeader backAvailable={true} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen4"
          component={SignupScreen4}
          options={{
            header: () => (
              <CustomHeader backAvailable={true} logoutAvailable={true} />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="ReadyToEnter"
          component={ReadyToEnter}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  idText: {
    color: "#999",
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});
