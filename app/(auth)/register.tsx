import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import GoogleButton from "@/components/GoogleButton";
import SimpleButton from "@/components/SimpleButton";

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <View style={GlobalStyles.container}>
        <CustomBackButton />
        <View>
          <Text style={GlobalStyles.title}>Let's get</Text>
          <Text style={GlobalStyles.title}>started</Text>
        </View>
        <SimpleButton
          label="Sign up"
          backgroundColor="black"
          onPress={() => {
            console.log("Sign up button pressed");
          }}
        />
        <Text>or continue with</Text>
        <GoogleButton />

        <Text>
          Aready have an account!{" "}
          <Link href="/(auth)/login" style={{ fontWeight: "bold" }}>
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
