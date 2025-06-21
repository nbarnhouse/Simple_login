import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  name: string;
  username: string;
  password: string;
  onSuccess: () => void; // callback to run if validation passes
};

const SimpleAuthButton: React.FC<Props> = ({
  label,
  textColor = "white",
  backgroundColor = "black",
  name,
  username,
  password,
  onSuccess,
}) => {
  const validateInputs = () => {
    if (name.trim().length === 0) {
      alert("Please enter your name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (password.length === 0) {
      alert("Please enter a password.");
      return false;
    }

    return true;
  };

  const handlePress = () => {
    if (validateInputs()) {
      onSuccess();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={handlePress}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SimpleAuthButton;
