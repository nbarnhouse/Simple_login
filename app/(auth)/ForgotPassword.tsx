import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import ScreenWrapper from "@/components/ScreenWrapper";

const forgotPassword = () => {
  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>You have forgotten your password!</Text>
        <CustomBackButton />
      </View>
    </ScreenWrapper>
  );
};

export default forgotPassword;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
