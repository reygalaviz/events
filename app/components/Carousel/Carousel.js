import React from "react";
import { FlatList, StyleSheet } from "react-native";
import constants from "../../constants/constants";

const CARD_WIDTH = constants.cardWidth - 150;
const CARD_WIDTH_SPACING = CARD_WIDTH + constants.l;

function Carousel({ renderItem, items = [] }) {
  return (
    <FlatList
      data={items}
      horizontal
      style={styles.container}
      decelerationRate="fast"
      keyExtractor={(i) => i.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        if (renderItem) {
          return renderItem({
            item,
            index,
            style: {
              width: CARD_WIDTH,
              height: constants.cardHeight + 30,
              marginLeft: index == items[0] ? 0 : constants.m,
              // marginLeft: constants.m,
              marginRight: index === items.length - 1 ? constants.m : 0,
            },
          });
        }
        return null;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: constants.s,

    flexGrow: 0,
  },
});

export default Carousel;
