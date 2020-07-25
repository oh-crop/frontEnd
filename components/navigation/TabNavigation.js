import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import SearchStackNavigator from './SearchStackNavigator';
import GardenStackNavigator from './GardenStackNavigator';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />;
const gardenIcon = <Ionicons name="md-nutrition" size={40} color="black" />;

const Tab =  createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#E6B357',
      }}
      >
      <Tab.Screen
        name="Search"
        component={ SearchStackNavigator }
        options={{ tabBarIcon: () => searchIcon  }}/>
      <Tab.Screen
        name="Garden"
        component={ GardenStackNavigator }
        options={{ tabBarIcon: () => gardenIcon }}/>
    </Tab.Navigator>
  );
}
