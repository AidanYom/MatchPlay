import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import UserChat from "../../components/UserChat";
import { useUser } from "@realm/react";
import Config from "react-native-config";

const ChatScreen = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  const user = useUser();
  useEffect(() => {
    const matchesList = async () => {
      try {
        const response = await fetch(
          `http://192.168.4.145:3000/` + `chats/matches/${user.id}`
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
  // console.log("matches", matches);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable>
        {matches.map((item, index) => (
          <UserChat key={index} item={item} navigation={navigation} />
        ))}
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 5,
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#29692E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatScreen;
