import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../route";

type ResultRouteProp = RouteProp<RootStackParamList, "Result">;

export default function Result() {
  const route = useRoute<ResultRouteProp>();
  const { baseNumber, score, choice, winner } = route.params;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={[styles.resultText, winner ? styles.win : styles.lose]}>
        {winner ? "You Won!" : "You Lost"}
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          Your choice: <Text style={styles.bold}>{choice}</Text>
        </Text>
        <Text style={styles.info}>
          Base number: <Text style={styles.bold}>{baseNumber}</Text>
        </Text>
        <Text style={styles.info}>
          Your score: <Text style={styles.bold}>{score}</Text>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  resultText: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 30,
  },
  win: {
    color: "#2a9d8f",
  },
  lose: {
    color: "#e63946",
  },
  infoBox: {
    marginBottom: 40,
    alignItems: "center",
  },
  info: {
    fontSize: 20,
    color: "#333",
    marginVertical: 5,
  },
  bold: {
    fontWeight: "700",
    color: "#6A0DAD",
  },
  button: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
