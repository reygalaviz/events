import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import AddBottomSheet from "../../components/AddBottomSheet";
import constants from "../../constants/constants";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

var iconSize = constants.iconSize;

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

const AddScreenComponent = () => {
  return null;
};

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

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "white" },
      headerShown: false,
    }}
  >
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

function BottomTabNavigation({ navigation }) {
  const bottomSheetRef = useRef();
  const snapPoints = ["50%"];

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Entypo
                  name="home"
                  size={iconSize}
                  color={focused ? "black" : "#aaaaaa"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <MaterialCommunityIcons
                  name="message-reply"
                  size={iconSize}
                  color={focused ? "black" : "#aaaaaa"}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={AddScreenComponent}
          options={{
            tabBarIcon: () => <AddBottomSheet />,
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Octicons
                  name="bell-fill"
                  size={iconSize}
                  color={focused ? "black" : "#aaaaaa"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <FontAwesome5
                  name="user-alt"
                  size={iconSize}
                  color={focused ? "black" : "#aaaaaa"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});

export default BottomTabNavigation;
