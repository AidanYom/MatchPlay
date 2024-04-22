import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import DatePicker from "react-native-date-picker";
import {
  userProfileSelector,
  updateUserProfileName,
  updateUserProfilePhone,
  updateUserProfileGender,
  updateUserProfileBirthday,
  updateUserProfileStage,
} from "../../slices/userProfile";
import { useDispatch, useSelector } from "react-redux";

const SignupScreen1 = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const handleNameChange = (text) => {
    dispatch(updateUserProfileName(text));
  };
  const handlePhoneChange = (text) => {
    dispatch(updateUserProfilePhone(text));
  };
  const handleGenderChange = (text) => {
    dispatch(updateUserProfileGender(text));
  };
  const handleBirthdayChange = (text) => {
    dispatch(updateUserProfileBirthday(text.toString()));
  };
  const handleStageChange = () => {
    dispatch(updateUserProfileStage("2"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile Creation</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={handleNameChange}
          value={userProfile.name}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <PhoneInput
          onChangePhoneNumber={handlePhoneChange}
          initialCountry="us"
          initialValue={userProfile.phoneNumber}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={userProfile.gender}
          onChangeText={handleGenderChange}
          placeholder="Gender"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday</Text>
        <DatePicker
          style={styles.input}
          mode="date"
          date={
            userProfile.birthday ? new Date(userProfile.birthday) : new Date()
          }
          onDateChange={handleBirthdayChange}
        />
      </View>

      <Pressable
        onPress={() => {
          handleStageChange();
          navigation.navigate("SignupScreen2");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
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

export default SignupScreen1;
