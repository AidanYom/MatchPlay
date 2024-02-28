import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider, DefaultTheme } from "react-native-paper";

import ForgotPasswordScreen from "./src/screens/login/forgot_password.js";
import HomeScreen from "./src/screens/Home/home.js";
import LoginScreen from "./src/screens/login/login.js";
import SignupScreen from "./src/screens/signup/signup.js";
import StartScreen from "./src/screens/start/start.js";

import CustomHeader from "./src/components/custom_header.js";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#29692E",
    secondary: "#ffffff",
    tertiary: "#ffffff",
    background: "#ffffff",
    surfaceVariant: "#ffffff",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ header: () => <CustomHeader /> }}
          ></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ header: () => <CustomHeader /> }}
          ></Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ header: () => <CustomHeader /> }}
          ></Stack.Screen>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
