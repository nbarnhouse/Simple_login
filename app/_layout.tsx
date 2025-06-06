import GlobalStyles from "@/GlobalStyles";
import { Stack } from "expo-router";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {} from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Stack screenOptions={{ headerShown: false }} />

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          style={GlobalStyles.background}
        >
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
}
