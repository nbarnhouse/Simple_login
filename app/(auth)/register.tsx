import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Router } from "expo-router";

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Register Screen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
