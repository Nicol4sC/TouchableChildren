import React from "react";
import { Text, StyleSheet } from "react-native";

export default function LoginButton({ children }) {
  return (
    <Text style={styles.text}>
      Botoes
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
