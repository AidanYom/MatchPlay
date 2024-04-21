import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Slider from "@react-native-community/slider";
import { useDispatch, useSelector } from "react-redux";
import {
  putUpdateUserProfile,
  updateUserProfileDrinkingSmoking,
  updateUserProfilePlayingRangeMax,
  updateUserProfilePlayingRangeMin,
  updateUserProfileStage,
  userProfileSelector,
} from "../../slices/userProfile";

function SignupScreen4({ navigation }) {
  const dispatch = useDispatch();

  const {
    userProfile,
    loading: profileLoading,
    hasErrors: profileHasErrors,
  } = useSelector(userProfileSelector);

  const handleDrinkingSmokingChange = (text) => {
    dispatch(updateUserProfileDrinkingSmoking(text));
  };
  const handleRangeMinChange = (text) => {
    dispatch(updateUserProfilePlayingRangeMin(Number(text)));
  };
  const handleRangeMaxChange = (text) => {
    dispatch(updateUserProfilePlayingRangeMax(Number(text)));
  };
  const handleStageChange = () => {
    dispatch(updateUserProfileStage("5"));
  };

  useEffect(() => {
    if (userProfile.stage == "5") {
      dispatch(putUpdateUserProfile(userProfile));
    }
  }, [userProfile.stage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Drinking or Smoking on The Course</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.drinkingSmoking.drinks}
            onValueChange={() => handleDrinkingSmokingChange("drinks")}
          />
          <Text>Drink</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.drinkingSmoking.smokes}
            onValueChange={() => handleDrinkingSmokingChange("smokes")}
          />
          <Text>Smoke</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.drinkingSmoking.neither}
            onValueChange={() => handleDrinkingSmokingChange("neither")}
          />
          <Text>I do not drink or smoke</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.drinkingSmoking.noSmokers}
            onValueChange={() => handleDrinkingSmokingChange("noSmokers")}
          />
          <Text>Do not play with drinkers</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={userProfile.drinkingSmoking.noDrinkers}
            onValueChange={() => handleDrinkingSmokingChange("noDrinkers")}
          />
          <Text>Do not play with smokers</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Handicap Range I will Play With</Text>
        <View style={styles.rangeContainer}>
          <TextInput
            style={styles.rangeInput}
            value={userProfile.playingRange.lower.toString()}
            onChangeText={handleRangeMinChange}
            keyboardType="numeric"
          />
          <Text style={styles.rangeDash}>-</Text>
          <TextInput
            style={styles.rangeInput}
            value={userProfile.playingRange.upper.toString()}
            onChangeText={handleRangeMaxChange}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Pressable
        onPress={() => {
          handleStageChange();
          if (userProfile.stage == "5") {
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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  rangeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rangeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  rangeDash: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SignupScreen4;
