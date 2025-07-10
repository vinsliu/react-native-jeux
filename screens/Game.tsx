import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import AnimatedButton from "../components/AnimatedButton";

export default function Game() {
  const [choice, setChoice] = useState("");
  const [baseNumber] = useState(() => Math.floor(Math.random() * 100));
  const [score] = useState(() => Math.floor(Math.random() * 100));
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (choice) {
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);

      navigation.navigate("Result", {
        baseNumber,
        score,
        choice,
        winner,
      });
    }
  }, [choice]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Guess the number</Text>
      <Text style={styles.baseNumber}>{baseNumber}</Text>

      <View style={styles.buttonGroup}>
        <AnimatedButton action="higher" onPress={() => setChoice("higher")} />
        <AnimatedButton action="lower" onPress={() => setChoice("lower")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  baseNumber: {
    fontSize: 64,
    fontWeight: "700",
    color: "#6A0DAD",
    marginBottom: 40,
  },
  buttonGroup: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
