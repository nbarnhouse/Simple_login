import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "@expo/vector-icons/Feather";

import GlobalStyles from "@/GlobalStyles";
import SimpleButton from "@/components/SimpleButton";
import CustomBackButton from "@/components/CustomBackButton";
import GoogleButton from "@/components/GoogleButton";
import ScreenWrapper from "@/components/ScreenWrapper";

const LoginScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   await AsyncStorage.setItem("userToken", "abc123");
  //   router.replace("/");
  // };

  return (
    <ScreenWrapper>
      <CustomBackButton />
      <View>
        <Text style={GlobalStyles.title}>Hey,</Text>
        <Text style={GlobalStyles.title}>Welcome</Text>
        <Text style={GlobalStyles.title}>Back</Text>
      </View>

      <TextInput
        style={GlobalStyles.inputField}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <View style={styles.textWrapper}>
        <TextInput
          style={GlobalStyles.inputField}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Feather name="eye" size={18} color="#aaa" />
          <Feather name="eye" size={18} color="#aaa" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Link href={"/ForgotPassword"} style={{ fontWeight: "bold" }}>
          Forgot Password?
        </Link>
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

      <Text style={GlobalStyles.spacerText}>Don't have an account?</Text>
      <Link href="/(auth)/Register">
        <Text style={{ fontWeight: "bold" }}>Sign Up </Text>
      </Link>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textWrapper: {
    marginRight: 10,
  },
});
