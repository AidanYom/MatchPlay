import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

import banner_logo from "../assets/banner_logo.png";

const CustomHeader = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.content}>
      <ImageBackground
        source={banner_logo}
        resizeMode="contain"
        style={styles.logo}
      >
        <IconButton
          icon="arrow-left-bold-outline"
          iconColor="#29692E"
          onPress={goBack}
          style={styles.iconButton}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ffffff",
    height: 125,
    justifyContent: "center",
  },
  iconButton: {
    position: "absolute",
    left: 4,
    top: 12,
  },
  logo: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default CustomHeader;
