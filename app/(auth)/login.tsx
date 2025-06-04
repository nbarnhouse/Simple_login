import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = async () => {
    await AsyncStorage.setItem("userToken", "abc123");
    router.replace("/");
  };

  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
