import { useAuth, useUser } from "@realm/react";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function LoadStartScreen({ navigation }) {
  const { logOut } = useAuth();
  const user = useUser();

  useEffect(() => {
    navigation.navigate("SwipeScreen");
  });

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={"large"} />
      {/* <Pressable onPress={logOut}>
        <Text>{`Logout ${user?.profile.email}`}</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadStartScreen;
