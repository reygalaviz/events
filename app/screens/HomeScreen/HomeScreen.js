import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import EventsCarousel from "../../components/EventsCarousel";
import constants from "../../constants/constants";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import Divider from "../../components/Divider";

function HomeScreen({ navigation }) {
  const events = [
    {
      id: 1,
      title: "Argos in Cappadocia",
      image: require("../../../assets/crowd.jpeg"),
      location: "Turkey, Cappadocia",
      rating: 9,
      pricePeerDay: "130$",
    },
    {
      id: 2,
      title: "Sultan Cave Suites",
      image: require("../../../assets/reading.jpeg"),
      location: "Turkey, Cappadocia",
      rating: 9.3,
      pricePeerDay: "230$",
    },
    {
      id: 3,
      title: "Villa Brunella",
      image: require("../../../assets/crowd.jpeg"),
      location: "Italy, Capri",
      rating: 9.4,
      pricePeerDay: "280$",
    },
  ];

  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: constants.m }}>
          <Text style={styles.title}>Find events near you</Text>
          <CustomInput
            placeholder="Search near you"
            value={search}
            setValue={setSearch}
            enabled
            search
            style={{ height: 40 }}
          />
        </View>
        <CategoriesCarousel />
        <Text style={styles.sectionTitle}>Your Upcoming Events</Text>
        <EventsCarousel events={events} />
        <Text style={styles.sectionTitle}>College Life</Text>
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Community Service Events</Text>
        <EventsCarousel events={events} />
        <Text style={styles.sectionTitle}>Sports Events</Text>
        <EventsCarousel events={events} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: constants.title,
    color: constants.titleColor,
  },
  sectionTitle: {
    fontSize: constants.sectionTitle,
    paddingHorizontal: constants.m,
    color: constants.sectionColor,
    fontWeight: "500",
    marginTop: constants.s,
  },
  divider: {
    marginHorizontal: constants.m,
  },
});

export default HomeScreen;
