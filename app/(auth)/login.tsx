import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const router = useRouter();

  // const handleLogin = async () => {
  //   await AsyncStorage.setItem("userToken", "abc123");
  //   router.replace("/");
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>

      <TextInput style={styles.inputField} placeholder="Enter text" />

      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account? <Link href="/(auth)/register">Sign Up </Link>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5eef8",
  },

  inputField: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
  },
});
