import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../../screens/ProfileScreen";
import BookmarksScreen from "../../screens/BookmarksScreen";
import BottomTabNavigation from "../BottomTabNavigation";

const Drawer = createDrawerNavigator();

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="ProfileDrawer" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
