import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import constants from "../../constants/constants";
import Divider from "../Divider/Divider";

function CategoriesCarousel() {
  const categories = [
    {
      id: 0,
      name: "you",
    },
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "nightlife",
    },
    {
      id: 3,
      name: "college life",
    },
    {
      id: 4,
      name: "family",
    },
    {
      id: 5,
      name: "festivals",
    },
    {
      id: 6,
      name: "18+",
    },
    {
      id: 7,
      name: "21+",
    },
    {
      id: 8,
      name: "seasonal",
    },
    {
      id: 9,
      name: "seminar",
    },
    {
      id: 10,
      name: "stand-up",
    },
    {
      id: 11,
      name: "workshops",
    },
  ];

  const ref = useRef();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      amimated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  return (
    <FlatList
      ref={ref}
      initialScrollIndex={index}
      data={categories}
      horizontal
      style={styles.container}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingLeft: constants.m }}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index: fIndex }) => {
        return (
          <Pressable
            style={{
              marginVertical: constants.s,
              marginRight: fIndex === 0 ? constants.m : constants.s / 2,
              paddingHorizontal: constants.m,
              paddingVertical: constants.s,
              borderColor: constants.active,
              backgroundColor:
                fIndex === index ? constants.active : constants.inactive,

              borderRadius: 12,
            }}
            onPress={() => {
              setIndex(fIndex);
            }}
          >
            <Text
              style={{
                color:
                  fIndex === index
                    ? constants.activeText
                    : constants.inactiveText,
              }}
            >
              {item.name}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 0 },
  youContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: constants.m,
    backgroundColor: "#e2e2e2",
    paddingVertical: constants.s,
    paddingHorizontal: constants.m,
    borderRadius: 12,
  },
});

export default CategoriesCarousel;
