import React from "react";
import { View, StyleSheet } from "react-native";
import constants from "../../constants/constants";

function Divider({ style }) {
  return <View style={[styles.line, style]}></View>;
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    marginTop: constants.marginTop,
    marginBottom: constants.marginTop,
    backgroundColor: "#DFD8C8",
  },
});

export default Divider;
