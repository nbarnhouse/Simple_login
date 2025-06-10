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

export default GlobalStyles;
