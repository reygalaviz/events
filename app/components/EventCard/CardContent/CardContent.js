import React from "react";
import { View, StyleSheet } from "react-native";
import constants from "../../../constants/constants";

function CardContent({ children, style }) {
  return <View style={[styles.content, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: constants.s,
    paddingTop: constants.s / 2,
    paddingBottom: constants.l,
    backgroundColor: "white",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default CardContent;
