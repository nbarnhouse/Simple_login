import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { Children } from "react";
import GlobalStyles from "@/GlobalStyles";

import { ReactNode } from "react";

const ScreenWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          style={GlobalStyles.container}
        >
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
