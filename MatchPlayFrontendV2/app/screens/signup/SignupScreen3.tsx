import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  putUpdateUserProfile,
  updateUserProfileMusicPrefs,
  updateUserProfileStage,
  updateUserProfileTimePrefs,
  userProfileSelector,
} from "../../slices/userProfile";

function SignupScreen3({ navigation }) {
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const handleTimePrefChange = (text) => {
    dispatch(updateUserProfileTimePrefs(text));
  };
  const handleMusicPrefChange = (text) => {
    dispatch(updateUserProfileMusicPrefs(text));
  };
  const handleStageChange = () => {
    dispatch(updateUserProfileStage("4"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Time Preferences</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.timePrefs.weekendDaytime}
            onValueChange={() => handleTimePrefChange("weekendDaytime")}
          />
          <Text>Weekend Daytime</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.timePrefs.weekendTwilight}
            onValueChange={() => handleTimePrefChange("weekendTwilight")}
          />
          <Text>Weekend Twilight</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.timePrefs.weekdayDaytime}
            onValueChange={() => handleTimePrefChange("weekdayDaytime")}
          />
          <Text>Weekday Daytime</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.timePrefs.weekdayTwilight}
            onValueChange={() => handleTimePrefChange("weekdayTwilight")}
          />
          <Text>Weekday Twilight</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Music?</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.musicPrefs.must}
            onValueChange={() => handleMusicPrefChange("must")}
          />
          <Text>Definitely</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.musicPrefs.indifferent}
            onValueChange={() => handleMusicPrefChange("indifferent")}
          />
          <Text>Indifferent</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.musicPrefs.none}
            onValueChange={() => handleMusicPrefChange("none")}
          />
          <Text>No Music At All</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          handleStageChange();
          navigation.navigate("SignupScreen4");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-evenly",
    marginBottom: 100,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#29692E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen3;
