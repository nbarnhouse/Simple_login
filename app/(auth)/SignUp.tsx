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
import React from "react";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import GoogleButton from "@/components/GoogleButton";
import SimpleButton from "@/components/SimpleButton";

const SignUpScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textEntryIcon, setTextEntryIcon] = useState<"eye" | "eye-off">("eye");

  const handleSignUp = async () => {
    try {
      const user = { name, userName, password };
      console.log("User signed up:", user);

      await AsyncStorage.setItem("user", JSON.stringify(user));
      console.log("User signed up:", user);
      router.push("/(app)/Home");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          style={GlobalStyles.container}
        >
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
              value={userName}
              onChangeText={setUserName}
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

          <SimpleButton
            label="Sign up"
            textColor="white"
            backgroundColor="black"
            onPress={handleSignUp}
          />
          <Text style={{ alignSelf: "center" }}>or register with</Text>
          <GoogleButton />

          <Text style={{ alignSelf: "center" }}>
            Aready have an account!{" "}
            <Link href="/(auth)/Login" style={{ fontWeight: "bold" }}>
              Login
            </Link>
          </Text>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;
