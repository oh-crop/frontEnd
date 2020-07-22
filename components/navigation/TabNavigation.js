import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import MyGarden from '../pages/MyGarden';
import SearchStackNavigator from './SearchStackNavigator'
// import Search from '../pages/Search';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />
const homeIcon = <Ionicons name="md-home" size={40} color="black" />
const gardenIcon = <Ionicons name="md-nutrition" size={40} color="black" />

const Tab =  createBottomTabNavigator();

export default function TabNavigation(){
  return(
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#f5b70f',
      }}
      >
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{ tabBarIcon: () => searchIcon  }}/>
      <Tab.Screen name="Garden" component={MyGarden} options={{ tabBarIcon: () => gardenIcon }}/>
    </Tab.Navigator>
  )
}
