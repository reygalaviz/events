import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import constants from "../../constants/constants";

function MessagesBox(props) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text>Pete Carroll</Text>
          <Text numberOfLines={1} style={styles.message}>
            We will meet @ 10, don't forget to pick up a couple of drinks and
            some snacks
          </Text>
        </View>
      </View>
      <View>
        <Text>6:03 pm</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.m,
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
  message: {
    width: constants.messageWidth,
  },
});

export default MessagesBox;