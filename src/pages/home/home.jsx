import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Tela principal
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem-vindo à Tela Inicial!</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#4CAF50",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
