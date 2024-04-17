import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import colors from "../../styles/colors";
import { shadows } from "../../styles/shadows";
import { buttonStyles } from "../../styles/button";
import { AuthOperationName } from "@realm/react";
import { LinearGradient } from "expo-linear-gradient";

const ReadyToEnter = ({ navigation }) => {
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
        <View>
          <Text style={styles.text}>Ready?</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("SwipeScreen")}
          style={styles.button}
        >
          <Text style={buttonStyles.text}>Click to Enter Match Play</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
  button: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: "#29692E",
    marginTop: 40,
  },
  text: {
    fontSize: 40,
    color: "white",
  },
});

export default ReadyToEnter;
