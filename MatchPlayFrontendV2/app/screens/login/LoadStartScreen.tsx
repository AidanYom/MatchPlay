import { useAuth, useUser } from "@realm/react";
import React, { useEffect, useContext } from "react";
import { ActivityIndicator, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserType } from "../../UserContext";

function LoadStartScreen({ navigation }) {
  const { logOut } = useAuth();
  const user = useUser();
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    setUserId("660f11e2b13eaea0ac834367");
  });

  useEffect(() => {
    navigation.navigate("GenCompScreen");
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
