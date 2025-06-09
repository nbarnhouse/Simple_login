import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Router, Link } from "expo-router";

import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import GoogleG from "@/assets/svg/GoogleG";

const RegisterScreen = () => {
  //const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Text>Register Screen</Text>
      <Text>Hey, Welcome Back</Text>
      <Text>Register Screen</Text>
      <CustomBackButton />
      <Text>or continue with</Text>
      <GoogleG height={32} width={32} />

      <Text>
        Aready have an account! <Link href="/(auth)/login">Login</Link>
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
