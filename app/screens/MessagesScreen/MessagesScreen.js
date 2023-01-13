import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import constants from "../../constants/constants";
import MessagesBox from "../../components/MessagesBox";

function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState("");
  return (
    <>
      <Header avatar nameLocation />

      <View style={{ paddingHorizontal: constants.m }}>
        <Text style={styles.title}>Messages</Text>
        <CustomInput
          placeholder="Search Messages"
          value={messages}
          setValue={setMessages}
          enabled
          search
          style={{ height: 40 }}
        />
      </View>
      <ScrollView style={styles.container}>
        <MessagesBox />
        <MessagesBox />
        <MessagesBox />
        <MessagesBox />
        <MessagesBox />
        <MessagesBox />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: constants.m,
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

export default MessagesScreen;
