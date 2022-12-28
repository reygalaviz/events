import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";
import constants from "../../constants/constants";

function AddEventScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <SectionHeader publicSwitch="Public" purchaseSwitch="Purchase" />
        <CustomInput
          placeholder="Event Title"
          value={title}
          setValue={setTitle}
          enabled
          style={{ height: 45 }}
        />
        <CustomInput
          placeholder="Description"
          value={description}
          setValue={setDescription}
          enabled
          style={{
            height: constants.descriptionBox,
            paddingBottom: constants.descriptionPadBottom,
          }}
        />

        <SectionHeader
          title="Date and Time"
          endTimeSwitch="End Time"
          value={price}
          setValue={setPrice}
          placeholder="20"
        />
        <CustomInput
          placeholder="Select Date"
          value={title}
          setValue={setTitle}
          enabled
          style={{ height: 45 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomInput
            placeholder="Start Time"
            value={date}
            setValue={setDate}
            style={{ height: 45 }}
            containerStyle={{ width: constants.dateBoxWidth }}
          />
          <CustomInput
            placeholder="End Time"
            value={time}
            setValue={setTime}
            style={{ height: 45 }}
            containerStyle={{ width: constants.dateBoxWidth }}
          />
        </View>
        <SectionHeader title="Location" />
        <CustomInput
          placeholder="123 Main St."
          value={location}
          setValue={setLocation}
          enabled
          style={{ height: 45 }}
        />
        <SectionHeader
          title="Price"
          priceBox
          value={price}
          setValue={setPrice}
          placeholder="20"
        />
        <SectionHeader title="Add Guests" showSwitch />
        <CustomInput
          placeholder="Search Guests"
          value={search}
          setValue={setSearch}
          enabled
          search
          style={{ height: 40 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: constants.s,
  },
  formContainer: {
    paddingHorizontal: constants.m,
  },
});

export default AddEventScreen;
