import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { UserType } from "../../UserContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SwipeScreen = ({ navigation }) => {
  const [potentialMatch, setPotentialMatch] = useState(UserType);
  const { userId, setUserId } = useContext(UserType);
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
    <View>
      <Text>Swipe Screen</Text>
    </View>
  );
};

export default SwipeScreen;
