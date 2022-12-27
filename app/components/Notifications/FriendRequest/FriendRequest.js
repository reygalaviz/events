import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import constants from "../../../constants/constants";
import RequestButton from "../RequestButton/RequestButton";

function FriendRequest(props) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.messageTitle}>Pete Carroll</Text>
          <Text style={styles.messageSubtitle}>
            has requested to follow you
          </Text>
        </View>
      </View>
      <View style={styles.responseBox}>
        <RequestButton text="Accept" />
        <RequestButton
          text="Decline"
          type="DECLINE"
          style={{ marginLeft: constants.s / 3 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.m,
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#71A9F7",
    marginRight: constants.s,
  },
  messageTitle: {
    color: constants.titleColor,
  },
  messageSubtitle: {
    width: constants.notiWidth - 30,
    fontSize: constants.notiFont,
    color: "#aaaaaa",
  },
  responseBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FriendRequest;
