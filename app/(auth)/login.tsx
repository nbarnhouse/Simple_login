import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "@/GlobalStyles";
import SimpleButton from "@/components/SimpleButton";
import CustomBackButton from "@/components/CustomBackButton";

const LoginScreen = () => {
  const router = useRouter();

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
      <View>
        <TextInput style={styles.inputField} placeholder="Enter your email" />
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
      </View>
      <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
      {/* <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: "#000000",
          margin: 10,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => router.back()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity> */}

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
