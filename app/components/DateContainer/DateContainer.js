import React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/constants";

function DateContainer({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.number}>13</Text>
      <Text style={styles.month}>JAN</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: constants.s,
    paddingHorizontal: constants.m,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: constants.s,
  },
  number: {
    fontSize: constants.dateNum,
    fontWeight: "700",
    color: "#555555",
  },
  month: {
    fontSize: constants.dateMonth,
    color: "#8d8d8d",
  },
});

export default DateContainer;
