import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserType } from "../UserContext";
import { useFocusEffect } from "@react-navigation/native";

const UserChat = ({ item, navigation }) => {
  const userId = "660f11e2b13eaea0ac834367";
  // const { userId, setUserId } = useContext(UserType);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/chats/messages/${userId}/${item._id}`
      );
      const data = await response.json();

      if (response.ok) {
        setMessages(data);
      }
    } catch (error) {
      console.log("error fetching messeges", error);
    }
  };

  useFocusEffect(() => {
    fetchMessages();
  });

  const getLastMessage = () => {
    const n = messages.length;
    return messages[n - 1];
  };

  const lastMessage = getLastMessage();

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("MessageScreen", { recepientId: item._id })
      }
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 0.7,
        borderColor: "#D0D0D0",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{item?.name}</Text>
        {lastMessage && (
          <Text style={{ marginTop: 3, color: "gray", fontWeight: "500" }}>
            {lastMessage?.message}
          </Text>
        )}
        {!lastMessage && (
          <Text
            style={{
              marginTop: 3,
              color: "gray",
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
            Start a conversation
          </Text>
        )}
      </View>

      <View>
        {lastMessage && (
          <Text style={{ fontSize: 11, fontWeight: "400", color: "#585858" }}>
            {formatTime(lastMessage?.timeStamp)}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default UserChat;
