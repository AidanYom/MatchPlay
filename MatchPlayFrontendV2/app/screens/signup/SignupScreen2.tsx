import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  putUpdateUserProfile,
  updateUserProfileCourseDescription,
  updateUserProfileHandicap,
  updateUserProfileSelfDescription,
  updateUserProfileStage,
  userProfileSelector,
} from "../../slices/userProfile";

function SignupScreen2({ navigation }) {
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const handleHandicapChange = (text) => {
    dispatch(updateUserProfileHandicap(Number(text)));
  };
  const handleCourseChange = (text) => {
    dispatch(updateUserProfileCourseDescription(text));
  };
  const handleSelfChange = (text) => {
    dispatch(updateUserProfileSelfDescription(text));
  };
  const handleStageChange = () => {
    dispatch(updateUserProfileStage("3"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tell Us More!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Handicap</Text>
        <TextInput
          style={styles.input}
          value={userProfile.handicap.toString()}
          onChangeText={handleHandicapChange}
          keyboardType="numeric"
          placeholder="Enter Handicap"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tell Us About the Courses You Play!</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={userProfile.courseDescription}
          onChangeText={handleCourseChange}
          multiline
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Describe Yourself</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={userProfile.selfDescription}
          onChangeText={handleSelfChange}
          multiline
        />
      </View>
      <Pressable
        onPress={() => {
          handleStageChange();
          navigation.navigate("SignupScreen3");
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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

export default SignupScreen2;
