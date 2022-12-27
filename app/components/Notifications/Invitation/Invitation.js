import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import constants from "../../../constants/constants";
import RequestButton from "../RequestButton/RequestButton";

function Invitation(props) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.messageTitle}>Anthony Taylor</Text>
          <Text style={styles.messageSubtitle}>
            has invited you to Atkins Reading Challenge
          </Text>
        </View>
      </View>
      <View style={styles.responseBox}>
        <View style={styles.buttonBox}>
          <RequestButton text="Accept" />
          <RequestButton text="Decline" type="DECLINE" />
        </View>

        <View style={styles.image}></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.m,
    flexDirection: "row",
    flexGrow: 0,
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
    backgroundColor: "#508991",
    marginRight: constants.s,
  },
  messageTitle: {
    color: constants.titleColor,
  },
  messageSubtitle: {
    width: constants.notiWidth,
    fontSize: constants.notiFont,
    color: "#aaaaaa",
  },
  responseBox: {
    flexDirection: "row",
  },
  buttonBox: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginRight: constants.s,
  },
  image: { width: 50, height: 50, backgroundColor: "#2B4162", borderRadius: 5 },
});

export default Invitation;
