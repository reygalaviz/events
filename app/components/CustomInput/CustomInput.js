import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import constants from "../../constants/constants";
import { Entypo } from "@expo/vector-icons";

function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  enabled,
  search,
  style,
  containerStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        editable={enabled}
        selectTextOnFocus={enabled}
        disabled={enabled}
        placeholder={placeholder}
        style={[styles.input, style]}
      />
      <View style={styles.searchIcon}>
        {search && <Entypo name="magnifying-glass" size={24} color="#c6c6c6" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: constants.textBox,
    fontSize: constants.inputBoxText,
  },
  searchIcon: {},
});

const disabledStyles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    height: 50,
  },
});

export default CustomInput;
