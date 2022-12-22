import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import constants from "../../../constants/constants";

function CommentButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome5 name="comment" size={15} color="#555555" />
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

export default CommentButton;
