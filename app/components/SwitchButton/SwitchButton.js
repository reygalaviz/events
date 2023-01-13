import React from "react";
import { View, Text, Switch } from "react-native";
import constants from "../../constants/constants";

function SwitchButton({ onValueChange, value, title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: constants.s,
      }}
    >
      <Text>{title}</Text>
      <Switch
        trackColor={{ false: "white", true: "#7cd175" }}
        thumbColor="white"
        ios_backgroundColor="#e2e2e2"
        onValueChange={onValueChange}
        value={value}
        style={{ transform: [{ scaleX: 0.65 }, { scaleY: 0.65 }] }}
      />
    </View>
  );
}

export default SwitchButton;
