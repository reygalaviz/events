import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import constants from "../../constants/constants";
import { Ionicons, AntDesign, Foundation } from "@expo/vector-icons";

function Header({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.avatar}></View>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.text}>John Doe</Text>
          <View style={styles.location}>
            <Foundation name="marker" size={15} color="black" />
            <Text
              style={[styles.text, { paddingLeft: constants.locationSpacing }]}
            >
              Charlotte, North Carolina
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: constants.appHeader,
    paddingHorizontal: constants.m,
    justifyContent: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    paddingLeft: constants.userPaddingLeft,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "red",
  },
  text: {
    fontSize: constants.headerText,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
