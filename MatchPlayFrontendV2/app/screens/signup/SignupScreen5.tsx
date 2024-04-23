import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Install this package
import {
  putUpdateUserProfile,
  updateUserProfileImage,
  updateUserProfileStage,
  userProfileSelector,
} from "../../slices/userProfile";
import { useDispatch, useSelector } from "react-redux";

const SignupScreen5 = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const handleStageChange = () => {
    dispatch(updateUserProfileStage("6"));
  };

  useEffect(() => {
    if (userProfile.stage == "6") {
      dispatch(putUpdateUserProfile(userProfile));
    }
  }, [userProfile.stage]);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3.5, 5],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      dispatch(updateUserProfileImage(result.assets[0].base64));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add a Profile Photo!</Text>
      <View style={styles.imageContainer}>
        {userProfile.image && (
          <Image
            source={{ uri: `data:image/jpeg;base64,${userProfile.image}` }}
            style={styles.image}
          />
        )}
        <Pressable onPress={handleImagePicker} style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>Pick an Image</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          handleStageChange();
          if (userProfile.stage == "6") {
            dispatch(putUpdateUserProfile(userProfile));
          }
          navigation.navigate("ReadyToEnter");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  imageContainer: {
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  image: {
    width: 262,
    height: 375,
    marginBottom: 10,
    borderRadius: 10,
  },
  imagePicker: {
    backgroundColor: "#29692E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  imagePickerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen5;
