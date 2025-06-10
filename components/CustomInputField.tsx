import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

import GlobalStyles from "@/GlobalStyles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const customInputField = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.inputFieldWrapper}>
      <FontAwesome5
        name="envelope-open"
        size={18}
        color="#aaa"
        style={styles.icon}
      />

      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

export default customInputField;

const styles = StyleSheet.create({
  inputFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#AEB5BB",
    paddingLeft: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  inputField: {
    flex: 1,
    height: 55,
  },
});
