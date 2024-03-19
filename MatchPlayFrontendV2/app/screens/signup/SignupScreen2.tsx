import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignupScreen2({ navigation }) {
  const [handicap, setHandicap] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tell Us More!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Handicap</Text>
        <TextInput
          style={styles.input}
          value={handicap}
          onChangeText={setHandicap}
          keyboardType="numeric"
          placeholder="Enter Handicap"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tell Us About the Courses You Play!</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={courseDescription}
          onChangeText={setCourseDescription}
          multiline
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Describe Yourself</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={selfDescription}
          onChangeText={setSelfDescription}
          multiline
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("SignupScreen3")}
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
