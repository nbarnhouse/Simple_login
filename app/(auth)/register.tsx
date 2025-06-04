import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Router, Link } from "expo-router";

const RegisterScreen = () => {
  //const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Hey, Welcome Back</Text>
      <Text>Register Screen</Text>
      {/* <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity> */}
      <Text>or continue with</Text>
      <Text>
        Aready have an account! <Link href="/(auth)/login">Login</Link>
      </Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
