import React from "react";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView, View, StyleSheet } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [hidePass, setHidePass] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        textContentType="emailAddress"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
      />
      <View style={styles.pswd}>
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          textContentType="password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={hidePass ? true : false}
          right={
            <TextInput.Icon
              icon="eye"
              onPressIn={() => setHidePass(false)}
              onPressOut={() => setHidePass(true)}
            />
          }
          style={styles.input}
        />
        <Button
          mode="text"
          style={styles.forgotPswd}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          forgot password?
        </Button>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        textColor="rgba(255, 255, 255, 1)"
        onPress={() => navigation.navigate("Home")}
      >
        Login
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    transform: [{ scale: 1.25 }],
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 50,
    marginBottom: 200,
  },
  forgotPswd: {
    marginTop: 10,
  },
  input: {
    width: "70%",
  },
  pswd: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default LoginScreen;
