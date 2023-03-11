import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import Colors from "../constants/colors";

import Input from "./Input";

const StartGameScreen = ({ title }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (inputText) => {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  };

  const handleCleanInput = () => {
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>{title}</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un numero</Text>
          <Input
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleInputValue}
            value={inputValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Borrar"
                onPress={handleCleanInput}
                color={Colors.accent}
              />
            </View>
            <View>
              <Button
                title="Confirmar"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
  },
  button: {
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
