import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import ArrowCircleLeftIcon from "@/assets/svg/ArrowLeftCircleIcon";
import { useRouter } from "expo-router";

const CustomBackButton = () => {
  const router = useRouter();
  const onButtonPress = () => {
    router.back();
  };

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <ArrowCircleLeftIcon />
    </TouchableOpacity>
  );
};

export default CustomBackButton;
