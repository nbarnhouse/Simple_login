import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import GoogleButton from "@/components/GoogleButton";
import SimpleButton from "@/components/SimpleButton";
import ScreenWrapper from "@/components/ScreenWrapper";

const RegisterScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <ScreenWrapper>
      <CustomBackButton />
      <View>
        <Text style={GlobalStyles.title}>Let's get</Text>
        <Text style={GlobalStyles.title}>started</Text>
      </View>
      <TextInput
        style={GlobalStyles.inputField}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
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
    </ScreenWrapper>
  );
};

export default RegisterScreen;
