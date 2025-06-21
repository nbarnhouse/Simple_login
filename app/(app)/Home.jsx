import { StyleSheet, Text, View } from "react-native";

import CustomBackButton from "@/components/CustomBackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const { name } = JSON.parse(storedUser);
          setName(name);
        }
      } catch (err) {
        console.error("Failed to load user data", err);
      }
    };
    loadUser();
  }, []);

  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Welcome {name}, You are logged in!</Text>
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
