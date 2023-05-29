import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import ClassListScreen from "../screens/tab/ClassListScreen";
import ClassRoomScreen from "../screens/tab/ClassRoomScreen";
import UserScreen from "../screens/tab/UserScreen";

const TabBar = createBottomTabNavigator();

const TabNavigator: React.FC = () => {

  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name="수업 목록"
        component={ClassListScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#808080"
          },
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <FontAwesome name="list-ul" size={24} color="#e0e0e0" />
              ) : (
              <FontAwesome name="list-ul" size={24} color="#0c9bfb" />
            ),
        }}
      />
      <TabBar.Screen
        name="강의실"
        component={ClassRoomScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#808080"
          },
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <FontAwesome name="address-book" size={24} color="#e0e0e0" />
              ) : (
              <FontAwesome name="address-book" size={24} color="#0c9bfb" />
            ),
        }}
      />
      <TabBar.Screen
        name="마이 페이지"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#808080"
          },
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <FontAwesome name="user-circle" size={24} color="#e0e0e0" />
              ) : (
              <FontAwesome name="user-circle" size={24} color="#0c9bfb" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabNavigator;