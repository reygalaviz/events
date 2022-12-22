import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import MessagesScreen from "../../screens/MessagesScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();
const WorldStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "white" },
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);

const MessagesStackScreen = () => (
  <MessagesStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "white" },
      headerShown: false,
    }}
  >
    <MessagesStack.Screen name="MessagesScreen" component={MessagesScreen} />
  </MessagesStack.Navigator>
);

function BottomTabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="MessagesTab" component={MessagesStackScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
