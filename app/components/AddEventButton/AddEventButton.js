import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import constants from "../../constants/constants";

function AddEventButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Entypo name="plus" size={28} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19647E",
    marginBottom: constants.xl,
  },
});

export default AddEventButton;
