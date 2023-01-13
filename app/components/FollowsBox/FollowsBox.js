import React from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../../constants/constants";

function FollowsBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>
        172 <Text style={styles.text}>followers</Text>
      </Text>
      <Text style={styles.numText}>
        100 <Text style={styles.text}>following</Text>
      </Text>
      <Text style={styles.numText}>
        15 <Text style={styles.text}>events</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: constants.m,
  },
  numText: {
    fontWeight: "bold",
    fontSize: constants.followSize,
    paddingRight: constants.s,
  },
  text: {
    fontWeight: "normal",
    color: constants.subColor,
  },
});

export default FollowsBox;
