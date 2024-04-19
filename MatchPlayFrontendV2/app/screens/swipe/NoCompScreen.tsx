import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const NoCompScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Match Play</Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            onPress={() => navigation.navigate("ChatScreen")}
            name="chatbox-ellipses-outline"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Other Compatible Users</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Chat With Existing Matches</Text>
      <Text style={styles.text}>or</Text>
      <Text style={styles.text}>Come Back Later</Text>
    </View>
  );
};

export default NoCompScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },
});
