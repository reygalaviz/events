import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import constants from "../../constants/constants";
function Avatars(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../../assets/participant.jpeg")}
          style={styles.img}
        />
      </View>
      <View style={[styles.imgContainer, { marginLeft: -5 }]}>
        <Image
          source={require("../../../assets/participant.jpeg")}
          style={styles.img}
        />
      </View>
      <View style={[styles.imgContainer, { marginLeft: -5 }]}>
        <Image
          source={require("../../../assets/participant.jpeg")}
          style={styles.img}
        />
      </View>
      <View style={[styles.imgContainer, { marginLeft: -5 }]}>
        <Image
          source={require("../../../assets/participant.jpeg")}
          style={styles.img}
        />
      </View>
      <View
        style={[
          styles.imgContainer,
          {
            marginLeft: -5,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text style={styles.text}>20+</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: constants.avatarsMargin,
  },
  imgContainer: {
    width: 25,
    height: 25,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
  },
  img: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 100,
    alignSelf: "center",
  },
  text: {
    fontSize: constants.avatarFontSize,
    fontWeight: "500",
  },
});
export default Avatars;
