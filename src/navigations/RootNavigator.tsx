import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoardingScreen from "../screens/root/OnBoardingScreen";
import LoginScreen from "../screens/root/LoginScreen";
import TabNavigator from "./TabNavigator";

export type RootNavigatorParamList = {
  LoginScreen: undefined;
  OnBoardingScreen: undefined;
  TabNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default RootNavigator;