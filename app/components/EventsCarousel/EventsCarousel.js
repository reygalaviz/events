import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/constants";
import Carousel from "../Carousel";
import Card from "../EventCard/Card";
import CardImage from "../EventCard/CardImage";
import CardContent from "../EventCard/CardContent";
import Avatars from "../Avatars/Avatars";

function EventsCarousel({ events }) {
  return (
    <Carousel
      items={events}
      renderItem={({ item, style }) => {
        return (
          <Card style={[styles.card, style]}>
            <CardImage source={item.image} />

            <CardContent style={styles.content}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <View style={styles.participantsBox}>
                <Avatars />
                <Text style={styles.participantsText}>
                  <Text
                    style={[styles.participantsText, { fontWeight: "700" }]}
                  >
                    24
                  </Text>{" "}
                  joined
                </Text>
              </View>
            </CardContent>
          </Card>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    height: constants.cardHeight,
  },
  content: {
    height: 100,
    flexDirection: "column",
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: constants.cardTitle,
    fontWeight: "bold",
    color: constants.titleColor,
  },
  location: {
    fontSize: constants.cardLocation,
    color: "gray",
  },
  participantsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  participantsText: {
    fontSize: constants.cardPart,
    marginLeft: constants.s,
    color: constants.subColor,
  },
});

export default EventsCarousel;
