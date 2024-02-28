import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

function StartScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#29692E"]} // Green to white gradient
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/whole_logo.png")}
        />
        <Button
          mode="contained"
          style={styles.button}
          textColor="rgba(255, 255, 255, 0.65)"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          textColor="rgba(255, 255, 255, 0.65)"
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Button>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    marginTop: 50,
    transform: [{ scale: 1.25 }],
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    marginTop: 80,
    marginBottom: 50,
  },
});

export default StartScreen;
