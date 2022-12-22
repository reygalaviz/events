import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../../constants/constants";

function CustomButton({ onPress, text, type = "PRIMARY", bgColor, fgColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: constants.blueButton,
  },
  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 1,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: constants.buttonText,
  },
  text_SECONDARY: {
    color: "#3B71F3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
