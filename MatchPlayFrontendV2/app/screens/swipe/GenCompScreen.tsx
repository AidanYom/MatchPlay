import { View, Text, Pressable, StyleSheet } from "react-native";
import React, {
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useUser } from "@realm/react";
import Config from "react-native-config";

const GenCompScreen = ({ navigation }) => {
  const [potentialMatch, setPotentialMatch] = useState([]);
  const user = useUser();
  let gen = 0;
  let buttonText = "Let's Start Swiping";

  const compatibleUsers = async () => {
    try {
      const response = await fetch(
        Config.API_URL + `users/${user.id}/compatible/multiple`
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
});
