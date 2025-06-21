import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export default function SimpleButton({
  label,
  onPress,
  backgroundColor,
  textColor,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 30,
  },
  text: {
    fontWeight: "bold",
  },
});
