import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import NotificationScreen from "../../screens/NotificationScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

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

const NotificationStackScreen = () => (
  <NotificationStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "white" },
      headerShown: false,
    }}
  >
    <NotificationStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
    />
  </NotificationStack.Navigator>
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
      <Tab.Screen name="NotificationTab" component={NotificationStackScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
