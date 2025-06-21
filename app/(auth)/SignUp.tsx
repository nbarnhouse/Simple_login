import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter, Link } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import GlobalStyles from "@/GlobalStyles";
import SimpleAuthButton from "@/components/SimpleAuthButton";
import CustomBackButton from "@/components/CustomBackButton";
import GoogleButton from "@/components/GoogleButton";

const SignUpScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textEntryIcon, setTextEntryIcon] = useState<"eye" | "eye-off">("eye");

  const handleSignUp = async () => {
    if (!name.trim()) {
      Alert.alert("Invalid Name", "Please enter your name.");
      return;
    }

    const user = { name, username: inputUsername, password: inputPassword };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      Alert.alert("Success", "User registered!");
      setName("");
      setInputUsername("");
      setInputPassword("");
      router.push("/(app)/Home");
    } catch (error) {
      Alert.alert("Error", "Failed to save user data.");
      console.error("SignUp error:", error);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={GlobalStyles.container}>
            <CustomBackButton />
            <View>
              <Text style={GlobalStyles.title}>Let's get</Text>
              <Text style={GlobalStyles.title}>started</Text>
            </View>

            <View style={GlobalStyles.inputFieldWrapper}>
              <FontAwesome5
                name="user-circle"
                size={18}
                color="#aaa"
                style={GlobalStyles.icon}
              />
              <TextInput
                style={GlobalStyles.inputField}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={GlobalStyles.inputFieldWrapper}>
              <FontAwesome5
                name="envelope-open"
                size={18}
                color="#aaa"
                style={GlobalStyles.icon}
              />
              <TextInput
                style={GlobalStyles.inputField}
                placeholder="Enter your email"
                value={inputUsername}
                onChangeText={setInputUsername}
                placeholderTextColor="#aaa"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={GlobalStyles.inputFieldWrapper}>
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={18}
                color="#aaa"
                style={GlobalStyles.icon}
              />
              <TextInput
                style={GlobalStyles.inputField}
                secureTextEntry={secureTextEntry}
                placeholder="Enter your password"
                value={inputPassword}
                onChangeText={setInputPassword}
                placeholderTextColor="#aaa"
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  setTextEntryIcon(secureTextEntry ? "eye" : "eye-off");
                }}
                style={GlobalStyles.icon}
              >
                <Feather
                  name={textEntryIcon}
                  size={18}
                  color="#aaa"
                  style={GlobalStyles.icon}
                />
              </TouchableOpacity>
            </View>

            <SimpleAuthButton
              label="Sign up"
              textColor="white"
              backgroundColor="black"
              username={inputUsername}
              password={inputPassword}
              onSuccess={handleSignUp}
            />

            <Text style={{ alignSelf: "center" }}>or register with</Text>
            <GoogleButton />

            <Link href="/(auth)/Login" asChild>
              <Text style={GlobalStyles.spacerText}>
                Already have an account?
                <Text style={{ fontWeight: "bold" }}> Login</Text>
              </Text>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
