import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./components/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} />
      <StartGameScreen title={"Comenzar"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
