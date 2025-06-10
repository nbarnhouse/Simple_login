import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import GlobalStyles from "@/GlobalStyles";
import ScreenWrapper from "@/components/ScreenWrapper";
import SimpleButton from "@/components/SimpleButton";
import CustomBackButton from "@/components/CustomBackButton";
import GoogleButton from "@/components/GoogleButton";

const LoginScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textEntryIcon, setTextEntryIcon] = useState<"eye" | "eye-off">("eye");

  // const handleLogin = async () => {
  //   await AsyncStorage.setItem("userToken", "abc123");
  //   router.replace("/");
  // };

  return (
    <ScreenWrapper>
      <CustomBackButton />
      <View>
        <Text style={GlobalStyles.title}>Hey,</Text>
        <Text style={GlobalStyles.title}>Welcome</Text>
        <Text style={GlobalStyles.title}>Back</Text>
      </View>

      <View style={styles.inputFieldWrapper}>
        <FontAwesome5
          name="user-circle"
          size={18}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.inputFieldWrapper}>
        <MaterialCommunityIcons
          name="form-textbox-password"
          size={18}
          color="#aaa"
          style={styles.icon}
        />

        <TextInput
          style={styles.inputField}
          secureTextEntry={secureTextEntry}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            setTextEntryIcon(secureTextEntry ? "eye" : "eye-off");
          }}
        >
          <Feather
            name={textEntryIcon}
            size={18}
            color="#aaa"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Link href={"/ForgotPassword"} style={{ fontWeight: "bold" }}>
          Forgot Password?
        </Link>
      </View>

      <SimpleButton
        label="Login"
        textColor="white"
        backgroundColor="black"
        onPress={() => {
          console.log("Login button pushed");
        }}
      />

      <Text style={GlobalStyles.spacerText}>or continue with</Text>

      <GoogleButton />

      <Text style={GlobalStyles.spacerText}>
        Don't have an account?{" "}
        <Link href="/(auth)/Register" style={{ fontWeight: "bold" }}>
          Sign Up
        </Link>
      </Text>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#AEB5BB",
    paddingLeft: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  inputField: {
    flex: 1,
    height: 55,
  },
});
