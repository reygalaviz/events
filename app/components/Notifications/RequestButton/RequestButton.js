import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import constants from "../../../constants/constants";

function RequestButton({
  style,
  onPress,
  text,
  type = "ACCEPT",
  bgColor,
  fgColor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style,
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: constants.notiButtonWidth,
    height: constants.notifButtonHeight,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  container_ACCEPT: {
    backgroundColor: constants.blueButton,
  },
  container_DECLINE: {
    backgroundColor: "gray",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: constants.notiButttonFont,
  },
  text_SECONDARY: {
    color: "#3B71F3",
    fontSize: constants.notiButttonFont,
  },
});

export default RequestButton;
