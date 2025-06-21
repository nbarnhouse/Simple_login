import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useRouter, Link } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import GoogleButton from "@/components/GoogleButton";
import SimpleAuthButton from "@/components/SimpleAuthButton";

const SignUpScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textEntryIcon, setTextEntryIcon] = useState<"eye" | "eye-off">("eye");

  const handleSignUp = async () => {
    const user = { name, username, password };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      console.log("User data saved to Async storage:", user);
      setUsername("");
      setPassword("");
      setName("");
      router.push("/Home");
    } catch (error) {
      console.error("Error signing up:", error);
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
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#aaa"
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
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#aaa"
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
              name={name}
              username={username}
              password={password}
              onSuccess={handleSignUp}
            />

            <Text style={{ alignSelf: "center" }}>or register with</Text>
            <GoogleButton />

            <Link href="/(auth)/Login" asChild>
              <Text style={GlobalStyles.spacerText}>
                Already have an account!{" "}
                <Text style={{ fontWeight: "bold" }}>Login</Text>
              </Text>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
