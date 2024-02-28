import React from "react";
import { SafeAreaView, Text } from "react-native";

function HomeScreen(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
