import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../assets/images/logo.png";
import deskTimeLogo from "../../assets/images/desk_image.png";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Image source={deskTimeLogo} style={styles.deskImage} />
        <Text style={styles.title}>DeskTime Login</Text>
        <Text style={styles.tagline}>Your digital desk awaits.</Text>
        <Text style={styles.body}>
          Stay organized, focused, and on top of your day. This app is your
          personal workspace hub — like sitting down at your desk, anytime,
          anywhere.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.body}>Ready to get started?</Text>
        <Link href={"/login"} style={styles.body}>
          Go to login
        </Link>
        <Link href={"/register"} style={styles.body}>
          Go to sign in
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-around",
    backgroundColor: "#e5eef8",
  },
  header: { alignItems: "center", gap: 10 },
  title: {
    fontSize: 36,
    marginBottom: 10,
  },
  tagline: { fontSize: 16, fontStyle: "italic", color: "#555" },
  logo: { height: 50, resizeMode: "contain" },
  deskImage: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
  body: {
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#333",
  },
  footer: {
    alignItems: "center",
    gap: 10,
  },
});
