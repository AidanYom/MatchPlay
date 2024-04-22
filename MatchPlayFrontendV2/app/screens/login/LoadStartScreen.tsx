import { useAuth, useUser } from "@realm/react";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  userProfileSelector,
} from "../../slices/userProfile";

function LoadStartScreen({ navigation }) {
  const { logOut } = useAuth();
  const user = useUser();
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  useEffect(() => {
    dispatch(fetchUserProfile(user.id));

    if (userProfile.stage == "5") {
      navigation.navigate("HomeScreen");
    } else {
      navigation.navigate(`SignupScreen${userProfile.stage}`);
    }
  }, [dispatch]);

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
