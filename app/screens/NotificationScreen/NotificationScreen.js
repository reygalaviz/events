import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import EventReminder from "../../components/Notifications/EventReminder";
import FriendRequest from "../../components/Notifications/FriendRequest";
import Invitation from "../../components/Notifications/Invitation";
import constants from "../../constants/constants";

function NotificationScreen(props) {
  return (
    <>
      <Header avatar nameLocation />

      <View style={{ paddingHorizontal: constants.m }}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <ScrollView style={styles.container}>
        <Invitation />
        <FriendRequest />
        <EventReminder />
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
});

export default NotificationScreen;
