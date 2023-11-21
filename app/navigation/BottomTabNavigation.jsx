import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {COLORS} from "../constants/index"
//Screens

import {Home, Search, Profile} from  '../screens/'


const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    taBarStyles: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons name={focused?"home": "home-outline"} color={focused? COLORS.primary : COLORS.gray} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name={focused? "magnify": "magnify-minus-outline"} color={focused? COLORS.primary: COLORS.gray2} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name={focused? "account": "account-outline"} color={focused? COLORS.primary: COLORS.gray} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})

export default BottomTabNavigation;
