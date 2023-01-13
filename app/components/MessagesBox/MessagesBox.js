import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import constants from "../../constants/constants";

function MessagesBox(props) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.messageUser}>Rey Galaviz</Text>
            <Text style={styles.messageTime}>1:12 pm</Text>
          </View>

          <Text numberOfLines={1} style={styles.message}>
            We will meet @ 10, don't forget to pick up a couple of drinks and
            some snacks
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: constants.s,
    paddingRight: constants.m,
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "red",
    marginRight: constants.s,
  },
  messageUser: {
    fontSize: constants.userText,
    fontWeight: "500",
  },
  message: {
    fontSize: constants.userMessage,
    width: constants.messageWidth,
    color: "#8d8d8d",
  },
  messageTime: {
    color: "#8d8d8d",
    fontSize: constants.timeText,
  },
});

export default MessagesBox;
