import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import constants from "../../../constants/constants";

function HeartButton({ icon, onPress, color }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name={icon} size={15} color="#555555" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: constants.s / 2,
    marginBottom: constants.s,
  },
});

export default HeartButton;
