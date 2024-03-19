import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";

function SignupScreen3({ navigation }) {
  const [timePreferences, setTimePreferences] = useState({
    weekendDaytime: false,
    weekendTwilight: false,
    weekdayDaytime: false,
    weekdayTwilight: false,
  });

  const [musicPreference, setMusicPreference] = useState({
    definitely: false,
    indifferent: false,
    noMusic: false,
  });

  const handleTimePreferenceChange = (key) => {
    setTimePreferences({
      ...timePreferences,
      [key]: !timePreferences[key],
    });
  };

  const handleMusicPreferenceChange = (key) => {
    setMusicPreference({
      ...musicPreference,
      [key]: !musicPreference[key],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Time Preferences</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={timePreferences.weekendDaytime}
            onValueChange={() => handleTimePreferenceChange("weekendDaytime")}
          />
          <Text>Weekend Daytime</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={timePreferences.weekendTwilight}
            onValueChange={() => handleTimePreferenceChange("weekendTwilight")}
          />
          <Text>Weekend Twilight</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={timePreferences.weekdayDaytime}
            onValueChange={() => handleTimePreferenceChange("weekdayDaytime")}
          />
          <Text>Weekday Daytime</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={timePreferences.weekdayTwilight}
            onValueChange={() => handleTimePreferenceChange("weekdayTwilight")}
          />
          <Text>Weekday Twilight</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Music?</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={musicPreference.definitely}
            onValueChange={() => handleMusicPreferenceChange("definitely")}
          />
          <Text>Definitely</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={musicPreference.indifferent}
            onValueChange={() => handleMusicPreferenceChange("indifferent")}
          />
          <Text>Indifferent</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={musicPreference.noMusic}
            onValueChange={() => handleMusicPreferenceChange("noMusic")}
          />
          <Text>No Music At All</Text>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("SignupScreen4")}
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
