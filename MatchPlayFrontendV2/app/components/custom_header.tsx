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
import { useAuth } from "@realm/react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserProfile,
  putUpdateUserProfile,
  userProfileSelector,
} from "../slices/userProfile";

const CustomHeader: React.FC<{
  backAvailable: boolean;
  logoutAvailable: boolean;
}> = ({ backAvailable, logoutAvailable }) => {
  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const navigation = useNavigation();

  const { logOut } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(putUpdateUserProfile(userProfile));
    dispatch(clearUserProfile());
    logOut();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.content}>
      <ImageBackground
        source={require("../assets/banner_logo.png")}
        resizeMode="contain"
        style={styles.logo}
      >
        <View style={styles.buttonContainer}>
          {backAvailable && (
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
              <Text style={styles.backText}>&lt;</Text>
            </TouchableOpacity>
          )}
          {logoutAvailable && (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ffffff",
    height: 110,
    justifyContent: "center",
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },

  backButton: {
    borderRadius: 5,
    backgroundColor: "transparent",
    size: 10,
  },
  logoutButton: {
    borderRadius: 5,
    backgroundColor: "transparent",
    size: 6,
    marginTop: 8,
  },
  logo: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "baseline",
  },
});

export default CustomHeader;
