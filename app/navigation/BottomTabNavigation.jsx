import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigation} from '@react-navigation/bottom-tabs'
import {Ionicons} from 'react-native-vector-icons'

import {COLORS} from "../constants/index"
//Screens

import {Home, Search, Profile} from '../screens'


const Tab = createBottomTabNavigation()

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
        <Tab.Navigation screenOptions={screenOptions}>
            <Tab.screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcons: ({focused}) =>{
                        return <Ionicons 
                            name={ focused?"ios-home": "home-outlined"} 
                            size={24} 
                            color={focused? COLORS.primary: COLORS.gray2} 
                            />
                    }
                }} 
                />
            <Tab.screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarIcons: ({focused}) =>{
                        return <Ionicons 
                            name={"search-sharp"} 
                            size={24} 
                            color={focused? COLORS.primary: COLORS.gray2} 
                            
                            />
                    }
                }} 
                />
            <Tab.scree 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcons: ({focused}) =>{
                        return <Ionicons 
                            name={ focused?"person": "person-outlined"} 
                            size={24} 
                            color={focused? COLORS.primary: COLORS.gray2} 
                            />
                    }
                }} 
                />
        </Tab.Navigation>
    );
}

const styles = StyleSheet.create({})

export default BottomTabNavigation;
