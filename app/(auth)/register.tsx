import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Router, Link } from "expo-router";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";

const RegisterScreen = () => {
  //const router = useRouter();

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text>Hey, Welcome Back</Text>
      <Text>Register Screen</Text>
      <CustomBackButton />
      <Text>or continue with</Text>
      <Text>
        Aready have an account! <Link href="/(auth)/login">Login</Link>
      </Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
