import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../../screens/SignUpScreen";
import SignInScreen from "../../screens/SignInScreen";
import VerifyEmailScreen from "../../screens/VerifyEmailScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/NewPasswordScreen";
import BottomTabNavigation from "../BottomTabNavigation";

const Stack = createNativeStackNavigator();

function AuthNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
