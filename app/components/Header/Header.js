import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import constants from "../../constants/constants";
import { Foundation } from "@expo/vector-icons";

function Header({
  onCancelPress,
  cancel,
  avatar,
  nameLocation,
  create,
  style,
  username,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.viewIcons}>
        {cancel && (
          <TouchableOpacity onPress={onCancelPress}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}
        {avatar && <View style={styles.avatar}></View>}
        {username && <Text style={styles.usernameText}>galavizjunior11</Text>}

        {nameLocation && (
          <View style={styles.userInfo}>
            <Text style={styles.text}>John Doe</Text>
            <View style={styles.location}>
              <Foundation name="marker" size={15} color="black" />
              <Text
                style={[
                  styles.text,
                  { paddingLeft: constants.locationSpacing },
                ]}
              >
                Charlotte, North Carolina
              </Text>
            </View>
          </View>
        )}
      </View>

      <View style={[styles.viewIcons, styles.rightView]}>
        {create && (
          <Pressable style={styles.createButton}>
            <Text style={styles.createText}>Create</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: constants.appHeader,
    paddingHorizontal: constants.m,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  viewIcons: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
  },
  rightView: {
    justifyContent: "flex-end",
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
  usernameText: {
    fontSize: constants.usernameSize,
  },
  text: {
    fontSize: constants.headerText,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  createButton: {
    width: constants.createButtonW,
    height: constants.createButtonH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#467fd7",
    borderRadius: 10,
  },
  cancelText: {
    fontSize: constants.cancelText,
    fontWeight: "500",
    color: constants.titleColor,
  },
  createText: {
    fontSize: constants.createText,
    color: "white",
    fontWeight: "500",
  },
});

export default Header;
