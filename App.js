import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import LoginButton from "./src/components/Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Log In Pressionado!")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Sign in Pressionado!")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Imagem!")}
      >
        <Image
          source={require("./src/assets/imagens/Yasuo.jpg")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 50, //tamanho do botão
    margin: 45,
    borderRadius: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 30, // tamanho do texto
    fontWeight: "bold",
  },
  image: {
    width: 150, //tamanho da imagem
    height: 150,
  },
});
