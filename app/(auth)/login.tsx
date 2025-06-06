import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "@/GlobalStyles";
import SimpleButton from "@/components/SimpleButton";
import CustomBackButton from "@/components/CustomBackButton";
import GoogleButton from "@/components/GoogleButton";

const LoginScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   await AsyncStorage.setItem("userToken", "abc123");
  //   router.replace("/");
  // };

  return (
    <View style={GlobalStyles.container}>
      <Text>Login Screen</Text>
      {/* <CustomBackButton />
      <View>
        <Text style={GlobalStyles.title}>Hey,</Text>
        <Text style={GlobalStyles.title}>Welcome</Text>
        <Text style={GlobalStyles.title}>Back</Text>
      </View>

      <TextInput
        style={styles.inputField}
        placeholder="Enter your email"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
      </View>

      <SimpleButton
        label="login"
        backgroundColor="black"
        onPress={() => {
          console.log("Login button pushed");
        }}
      />

      <Text style={GlobalStyles.spacerText}>or continue with</Text>

      <GoogleButton />

      <Text style={GlobalStyles.spacerText}>
        Don't have an account?{" "}
        <Link href="/(auth)/register">
          <Text style={{ fontWeight: "bold" }}>Sign Up</Text>{" "}
        </Link>
      </Text> */}
    </View>
  );
};

export default LoginScreen;
//
// const styles = StyleSheet.create({
//   inputField: {
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 25,
//     borderColor: "#AEB5BB",
//     paddingLeft: 20,
//   },
// });
