import React from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";

function Card({ children, style, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, styles.boxWithShadow, style]}
    >
      <View style={styles.inner}>{children}</View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 16,
  },
  inner: {
    width: "100%",
    height: "100%",
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default Card;
