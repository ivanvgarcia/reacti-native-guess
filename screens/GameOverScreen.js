import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of rounds: </Text>
      <Text>Number was: </Text>
      <PrimaryButton onPress={() => {}}>New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
