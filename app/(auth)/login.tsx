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
    <SafeAreaView style={GlobalStyles.background}>
      <View style={GlobalStyles.container}>
        <CustomBackButton />
        <View>
          <Text style={GlobalStyles.title}>Hey,</Text>
          <Text style={GlobalStyles.title}>Welcome</Text>
          <Text style={GlobalStyles.title}>Back</Text>
        </View>

        <TextInput
          style={GlobalStyles.inputField}
          placeholder="Enter your email"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={GlobalStyles.inputField}
          secureTextEntry={true}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
        </View>

        <SimpleButton
          label="Login"
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
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
