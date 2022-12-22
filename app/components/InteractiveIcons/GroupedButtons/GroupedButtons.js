import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import HeartButton from "../HeartButton";
import CommentButton from "../CommentButton";
import BookmarkButton from "../BookmarkButton";
import constants from "../../../constants/constants";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

function GroupedButtons({ style }) {
  const [heart, setHeart] = useState(false);
  const [book, setBook] = useState(false);

  const onHeartPress = () => {
    setHeart(!heart);
  };
  const onBookmarkPress = () => {
    setBook(!book);
  };
  return (
    <View style={[styles.container, style]}>
      <HeartButton icon={heart ? "heart" : "hearto"} onPress={onHeartPress} />
      <CommentButton />
      <BookmarkButton
        icon={book ? "bookmark" : "bookmark-o"}
        onPress={onBookmarkPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default GroupedButtons;
