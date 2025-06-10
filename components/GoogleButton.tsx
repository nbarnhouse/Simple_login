import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import GoogleG from "@/assets/svg/GoogleG";

export default function GoogleButton() {
  const router = useRouter();

  const handleGButtonPress = () => {
    Linking.openURL("https://accounts.google.com/");
  };

  return (
    <TouchableOpacity style={styles.buttonShape} onPress={handleGButtonPress}>
      <GoogleG height={32} width={32} />

      <Text>Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonShape: {
    height: 60,
    backgroundColor: "#e5eef8",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
  },
});
