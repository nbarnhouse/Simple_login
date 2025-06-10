import { Text, TouchableOpacity, View, TextInput } from "react-native";
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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
      <SimpleButton
        label="Sign up"
        backgroundColor="black"
        onPress={() => {
          console.log("Sign up button pressed");
        }}
      />
      <Text style={{ alignSelf: "center" }}>or register with</Text>
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
