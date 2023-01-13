import React, { useRef, useState, useCallback } from "react";
import constants from "../../constants/constants";
import Header from "../Header";
import AddEventButton from "../AddEventButton";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Portal, PortalHost } from "@gorhom/portal";
import { StyleSheet } from "react-native";
import AddEventScreen from "../../screens/AddEventScreen";

function AddBottomSheet(props) {
  const bottomSheetRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["100%"];

  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(!isOpen);
  }, []);

  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  };

  const onCancelPress = () => {
    bottomSheetRef?.current?.close();
  };

  return (
    <>
      <AddEventButton onPress={onAddButtonPress} />
      <Portal>
        <BottomSheet
          index={-1}
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          onChange={handleSnapPress}
          handleIndicatorStyle={{ display: "none" }}
          enablePanDownToClose={false}
          enableOverDrag={false}
          style={{}}
        >
          <Header
            cancel
            onCancelPress={onCancelPress}
            create
            style={styles.header}
          />
          <BottomSheetScrollView>
            <AddEventScreen />
          </BottomSheetScrollView>
        </BottomSheet>
      </Portal>
      <PortalHost name="host" />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: constants.headerAddScreen,
  },
});

export default AddBottomSheet;
