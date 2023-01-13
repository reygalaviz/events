import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Header from "../../components/Header";
import constants from "../../constants/constants";
import FollowsBox from "../../components/FollowsBox";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/participant.jpeg")}
            style={styles.img}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginHorizontal: constants.s,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.nameText}>Rey Galaviz</Text>
            <Text style={styles.usernameText}>@galavizjunior11</Text>
          </View>

          <Pressable style={styles.editButton}>
            <Text>Edit profile</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <FollowsBox />
        <Text style={styles.bioText}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: constants.m,
    paddingTop: constants.l,
  },
  profileContainer: {
    borderRadius: 10,
    backgroundColor: "blue",
  },
  userContainer: {
    flexDirection: "row",
  },
  coverPhoto: {
    width: "100%",
    height: "40%",
    borderRadius: 10,
  },
  imgContainer: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  nameText: {
    fontSize: constants.nameSize,
    color: constants.titleColor,
  },
  usernameText: {
    fontSize: constants.usernameSize,
    paddingTop: constants.s / 2,
  },
  bioText: {
    fontSize: constants.bioSize,
  },
  editButton: {
    width: constants.editBtnWidth,
    height: constants.editBtnHeight,
    backgroundColor: "white",
    marginTop: constants.editBtnMargin,
    borderWidth: 0.5,
    borderColor: constants.borderColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

export default ProfileScreen;
