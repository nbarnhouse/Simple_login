import { StyleSheet, Text, View } from "react-native";

import CustomBackButton from "@/components/CustomBackButton";
import ScreenWrapper from "@/components/ScreenWrapper";

const HomeScreen = () => {
  const { name } = JSON.parse("user");
  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Welcome, ${name} You are logged in!</Text>
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
