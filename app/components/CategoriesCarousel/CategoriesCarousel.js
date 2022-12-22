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

function CategoriesCarousel() {
  const categories = [
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
    ref.current.scrollToIndex({
      index,
      amimated: true,
      viewOffset: 20,
      viewPosition: 0.2,
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
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index: fIndex }) => {
        return (
          <Pressable
            style={{
              marginVertical: constants.s,
              marginRight: constants.s / 2,
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
});

export default CategoriesCarousel;
