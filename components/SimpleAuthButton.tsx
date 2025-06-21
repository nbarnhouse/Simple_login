import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

type Props = {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  username: string;
  password: string;
  onSuccess: () => void;
  disabled?: boolean;
};

const SimpleAuthButton: React.FC<Props> = ({
  label,
  textColor = "white",
  backgroundColor = "black",
  username,
  password,
  onSuccess,
  disabled = false,
}) => {
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return false;
    }

    if (!password || password.length === 0) {
      Alert.alert("Invalid Password", "Please enter your password.");
      return false;
    }

    return true;
  };

  const handlePress = () => {
    if (disabled) return;
    if (validateInputs()) {
      onSuccess();
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? "#ccc" : backgroundColor },
      ]}
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}
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
