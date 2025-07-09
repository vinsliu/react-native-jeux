import { useNavigation } from "@react-navigation/native";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight
        onPress={() => navigation.navigate("Game")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start game!</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 150,
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
    fontSize: 48,
  },
});
