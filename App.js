import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import LoginButton from "./src/components/Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Botao Log in */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Log In Pressionado!")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Botao Sign in */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Sign in Pressionado!")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Botao da Imagem */}
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
    backgroundColor: "pink",
    padding: 100, //tamanho do botão
    margin: 100,
    borderRadius: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 30, // tamanho do texto
    fontWeight: "bold",
  },
  image: {
    width: 310, //tamanho da imagem
    height: 250,
  },
});
