import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor: string;
};

export default function SimpleButton({
  label,
  onPress,
  backgroundColor,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonShape, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonShape: {
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
