import { useAuth, useUser } from "@realm/react";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  userProfileSelector,
} from "../../slices/userProfile";
import Config from "react-native-config";


function LoadStartScreen({ navigation }) {
  const { logOut } = useAuth();
  const user = useUser();
  const dispatch = useDispatch();

  const {
    userProfile,
    loading,
    hasErrors,
  } = useSelector(userProfileSelector);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUserProfile(user.id));

      if(userProfile._id){
        if (userProfile.stage === "6") {
          navigation.navigate("GenCompScreen");
        } else {
          navigation.navigate(`SignupScreen${userProfile.stage}`);
        }
      }
    };
  
    fetchData();
  }, [userProfile._id]);

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
