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

const LoginScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   await AsyncStorage.setItem("userToken", "abc123");
  //   router.replace("/");
  // };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <CustomBackButton />
      <View>
        <Text style={GlobalStyles.title}>Hey,</Text>
        <Text style={GlobalStyles.title}>Welcome</Text>
        <Text style={GlobalStyles.title}>Back</Text>
      </View>
      <KeyboardAvoidingView behavior="padding">
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
      </KeyboardAvoidingView>
      <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>

      <SimpleButton
        label="login"
        backgroundColor="black"
        onPress={() => {
          console.log("Login button pushed");
        }}
      />

      <Text>or continue with</Text>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: "white",
          borderRadius: 30,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
        }}
        onPress={() => router.push("/(auth)/register")}
      >
        <Text>Google</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account?{" "}
        <Link href="/(auth)/register">
          <Text style={{ fontWeight: "bold" }}>Sign Up</Text>{" "}
        </Link>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    borderWidth: 1,
    margin: 10,
    borderRadius: 25,
    borderColor: "#AEB5BB",
    paddingLeft: 20,
  },
});
