import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Switch,
  TextInput,
} from "react-native";
import PriceBox from "../PriceBox";
import constants from "../../constants/constants";
import SwitchButton from "../SwitchButton/SwitchButton";

const SectionHeader = ({
  title,
  containerStyle,
  titleStyle,
  publicSwitch,
  purchaseSwitch,
  endTimeSwitch,
  showSwitch,
  priceBox,
  value,
  setValue,
  placeholder,
}) => {
  const [publicEnabled, setPublic] = useState(false);
  const togglePublic = () => setPublic(!publicEnabled);

  const [purchaseEnabled, setPurchase] = useState(false);
  const togglePurchase = () => setPurchase(!purchaseEnabled);

  const [endEnabled, setEnd] = useState(false);
  const toggleEndtime = () => setEnd(!endEnabled);

  const [showEnabled, setShow] = useState(false);
  const toggleShow = () => setShow(!showEnabled);
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}

      {publicSwitch && (
        <SwitchButton
          value={publicEnabled}
          onValueChange={togglePublic}
          title="Public"
        />
      )}
      {purchaseSwitch && (
        <SwitchButton
          value={purchaseEnabled}
          onValueChange={togglePurchase}
          title="Purchase"
        />
      )}
      {endTimeSwitch && (
        <SwitchButton
          value={endEnabled}
          onValueChange={toggleEndtime}
          title="End Time"
        />
      )}
      {showSwitch && (
        <SwitchButton
          value={showEnabled}
          onValueChange={toggleShow}
          title="Show Attendance"
        />
      )}
      {priceBox && (
        <View style={{ alignSelf: "flex-end", marginTop: constants.s }}>
          <PriceBox
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            enabled={purchaseEnabled}
            style={{ color: purchaseEnabled ? "green" : "red" }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: constants.sectionTitle,
    color: constants.sectionColor,
  },
});

export default SectionHeader;
