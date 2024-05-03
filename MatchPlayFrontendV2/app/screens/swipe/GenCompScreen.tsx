import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React, {
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useAuth, useUser } from "@realm/react";
import Config from "react-native-config";
import { clearUserProfile } from "../../slices/userProfile";
import { useDispatch } from "react-redux";

const GenCompScreen = ({ navigation }) => {
  const [potentialMatch, setPotentialMatch] = useState([]);
  const user = useUser();
  let gen = 0;
  let buttonText = "Let's Start Swiping";

  const compatibleUsers = async () => {
    try {
      const response = await fetch(
        `https://matchplay-dev.onrender.com/` + `users/${user.id}/compatible/multiple`
      );

      const data = await response.json();

      if (response.ok) {
        setPotentialMatch(data);
        if (!data.length) {
          navigation.navigate("NoCompScreen");
        }
      }
    } catch (error) {
      console.log("error getting compatible users", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (gen > 0) {
        buttonText = "See More Users";
      }
      console.log(`Searching... ${gen++}`);
      compatibleUsers();
    }, [])
  );

  /* useEffect(() => {
    navigation.navigate("SwipeScreen", { potentialMatch: potentialMatch });
  }); */

  const { logOut } = useAuth();
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(clearUserProfile());
    logOut();
  };

  const handleEditProfile = () => {
    navigation.navigate("SignupScreen1");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Match Play",
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
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
      <Pressable
        onPress={() => {
          navigation.navigate("SwipeScreen", {
            potentialMatch: potentialMatch,
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default GenCompScreen;

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
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
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
