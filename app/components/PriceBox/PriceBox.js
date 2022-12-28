import React from "react";
import { Pressable, View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function PriceBox({ value, setValue, placeholder, enabled, style }) {
  return (
    <View style={styles.container}>
      <View style={styles.dollar}>
        <FontAwesome name="dollar" size={18} color="black" />
      </View>
      <View style={styles.dollarInput}>
        <TextInput
          value={value}
          onChangeText={setValue}
          editable={enabled}
          placeholder={placeholder}
          style={style}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dollar: {
    width: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRightWidth: 0,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  dollarInput: {
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default PriceBox;
