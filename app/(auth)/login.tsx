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

const LoginScreen = () => {
  const router = useRouter();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textEntryIcon, setTextEntryIcon] = useState<"eye" | "eye-off">("eye");

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (!storedUser) {
        Alert.alert("Error", "No user found. Please sign up first.");
        return;
      }

      const { username, password, name } = JSON.parse(storedUser);

      if (inputUsername === username && inputPassword === password) {
        Alert.alert("Login success", `Welcome back ${name}!`);
        setInputUsername("");
        setInputPassword("");
        router.push("/(app)/Home");
      } else {
        Alert.alert("Login failed", "Invalid username or password.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while logging in.");
      console.error("Login error:", error);
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
              <Text style={GlobalStyles.title}>Hey,</Text>
              <Text style={GlobalStyles.title}>Welcome</Text>
              <Text style={GlobalStyles.title}>Back</Text>
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
                placeholder="Username"
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
                placeholder="Password"
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

            <View style={{ alignItems: "flex-end" }}>
              <Link href={"/ForgotPassword"}>
                <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
              </Link>
            </View>

            <SimpleAuthButton
              label="Login"
              textColor="white"
              backgroundColor="black"
              username={inputUsername}
              password={inputPassword}
              onSuccess={handleLogin}
            />

            <Text style={GlobalStyles.spacerText}>or continue with</Text>
            <GoogleButton />

            <Link href="/(auth)/SignUp" asChild>
              <Text style={GlobalStyles.spacerText}>
                Don't have an account?
                <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
              </Text>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
