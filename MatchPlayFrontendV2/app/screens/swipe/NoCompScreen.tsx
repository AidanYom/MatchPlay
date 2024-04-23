import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { clearUserProfile } from "../../slices/userProfile";
import { useAuth } from "@realm/react";
import { useDispatch } from "react-redux";

const NoCompScreen = ({ navigation }) => {

  const { logOut } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserProfile());
    console.log("cleared profile")
    logOut();
  };

  const handleEditProfile = () => {
    navigation.navigate('SignupScreen1');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Match Play",
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleEditProfile}
            >
              <Text style={styles.logoutText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
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
  logoutButton: {
    borderRadius: 5,
    backgroundColor: "transparent",
    size: 6,
    marginTop: 8,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
