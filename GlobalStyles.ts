import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e5eef8",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontWeight: "bold",
  },
  spacerText: {
    alignSelf: "center",
  },
  inputField: {
    height: 55,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#AEB5BB",
    paddingLeft: 20,
  },
});

export default GlobalStyles;
