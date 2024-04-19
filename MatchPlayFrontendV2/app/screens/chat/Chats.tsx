import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../../UserContext";
import { useNavigation } from "@react-navigation/native";

const ChatsScreen = () => {
  const [matches, setMatches] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  useEffect(() => {
    const matchesList = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/chats/matches/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setMatches(data);
        }
      } catch (error) {
        console.log("Error showing matches", error);
      }
    };

    matchesList();
  }, []);
  console.log("matches", matches);
  return (
    <View>
      <Text>ChatsScreen</Text>
    </View>
    /* <ScrollView showsVerticalScrollIndicator={false}>
    <Pressable>
      {matches.map((item, index) => (
        <UserChat key={index} item={item} />
      ))}
    </Pressable>
  </ScrollView> */
  );
};

export default ChatsScreen;
