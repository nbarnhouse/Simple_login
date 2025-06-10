import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import logo from "../../assets/images/logo.png";
import DeskLogo from "@/assets/svg/DeskLogo";
import GlobalStyles from "@/GlobalStyles";
import { use, useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   router.replace("/login");
  // }, [router]);

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <View style={GlobalStyles.container}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <DeskLogo style={styles.deskImage} height={250} width={250} />
          <Text style={GlobalStyles.title}>DeskTime Login</Text>
          <Text style={styles.tagline}>Your digital desk awaits.</Text>
          <Text style={styles.body}>
            Stay organized, focused, and on top of your day. This app is your
            personal workspace hub — like sitting down at your desk, anytime,
            anywhere.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.tagline}>
            Ready to get started?{" "}
            <Link href={"/Login"} style={{ fontWeight: "bold" }}>
              Login
            </Link>
          </Text>
          <Text style={styles.tagline}>
            Need to Create an account?{" "}
            <Link href={"/SignUp"} style={{ fontWeight: "bold" }}>
              Sign up
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 10,
    alignItems: "center",
  },
  tagline: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
  },
  logo: {
    height: 50,
    resizeMode: "contain",
  },
  deskImage: {
    marginVertical: 10,
  },
  body: {
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#333",
  },
  footer: {
    gap: 10,
    alignItems: "center",
  },
});
