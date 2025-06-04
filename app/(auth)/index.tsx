import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../assets/images/logo.png";
import deskTimeLogo from "../../assets/images/desk_image.png";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} height={10} width={30} />
        <Image source={deskTimeLogo} />
        <Text style={styles.title}>DeskTime Login</Text>
        <Text>Your digital desk awaits.</Text>
      </View>
      <Text style={styles.body}>
        This app is your personal workspace hub — designed to help you stay
        organized, focused, and productive. Whether you're managing tasks,
        tracking appointments, or simply staying on top of your day, our clean
        interface and intuitive tools make it easy to log in and get to work.
        It's like sitting down at your desk — anytime, anywhere.
      </Text>
      <View style={styles.footer}>
        <Text>Ready to get started?</Text>
        <Link href={"/login"}>Go to login</Link>
        <Link href={"/register"}>Go to sign in</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#e5eef8",
  },
  header: {},
  title: {
    fontSize: 36,
    marginBottom: 10,
  },
  body: {},
  footer: {},
});
