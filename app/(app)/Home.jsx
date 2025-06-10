import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBackButton from "@/components/CustomBackButton";
import GlobalStyles from "@/GlobalStyles";
import ScreenWrapper from "@/components/ScreenWrapper";

const HomeScreen = ({ Name: String }) => {
  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Welcome, {Name} You logged in!</Text>
        <CustomBackButton />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
