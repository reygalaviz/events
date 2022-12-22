import React from "react";
import { View, StyleSheet, Image } from "react-native";
import GroupedButtons from "../../InteractiveIcons/GroupedButtons";
import constants from "../../../constants/constants";
import DateContainer from "../../DateContainer";

function CardImage({ source, borderBottomRadius = false }) {
  return (
    <View
      style={[styles.media].concat(
        borderBottomRadius ? styles.borderBottomRadius : null
      )}
    >
      <Image style={styles.image} source={source} />
      <View
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",

          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: constants.s,
        }}
      >
        <GroupedButtons style={styles.buttons} />
        <DateContainer style={styles.date} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    flex: 1,
    overflow: "hidden",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  borderBottomRadius: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  buttons: {
    alignSelf: "flex-end",
  },
  date: {
    alignSelf: "flex-end",
  },
});

export default CardImage;
