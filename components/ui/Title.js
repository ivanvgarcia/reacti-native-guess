import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.white,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 4 : 2,
    borderColor: Colors.white,
    padding: 12,
    marginBottom: 20,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
