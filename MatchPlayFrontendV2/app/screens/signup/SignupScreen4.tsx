import React, { useState } from "react";
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

function SignupScreen4({ navigation }) {
  const [drinkOrSmoke, setDrinkOrSmoke] = useState("");
  const [rangeMin, setRangeMin] = useState("0");
  const [rangeMax, setRangeMax] = useState("0");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Drinking or Smoking on The Course</Text>
        <CheckBox
          value={drinkOrSmoke === "Drink"}
          onValueChange={() => setDrinkOrSmoke("Drink")}
        />
        <Text>Drink</Text>
        <CheckBox
          value={drinkOrSmoke === "Smoke"}
          onValueChange={() => setDrinkOrSmoke("Smoke")}
        />
        <Text>Smoke</Text>
        <CheckBox
          value={drinkOrSmoke === "I do not drink or smoke"}
          onValueChange={() => setDrinkOrSmoke("I do not drink or smoke")}
        />
        <Text>I do not drink or smoke</Text>
        <CheckBox
          value={drinkOrSmoke === "Do not play with drinkers"}
          onValueChange={() => setDrinkOrSmoke("Do not play with drinkers")}
        />
        <Text>Do not play with drinkers</Text>
        <CheckBox
          value={drinkOrSmoke === "Do not play with smokers"}
          onValueChange={() => setDrinkOrSmoke("Do not play with smokers")}
        />
        <Text>Do not play with smokers</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Handicap Range I will Play With</Text>
        <View style={styles.rangeContainer}>
          <TextInput
            style={styles.rangeInput}
            value={rangeMin}
            onChangeText={setRangeMin}
            keyboardType="numeric"
          />
          <Text style={styles.rangeDash}>-</Text>
          <TextInput
            style={styles.rangeInput}
            value={rangeMax}
            onChangeText={setRangeMax}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("ReadyToEnter")}
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
});

export default SignupScreen4;
