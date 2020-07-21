import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MdSearch from 'react-ionicons/lib/MdSearch'
import MdNutrition from 'react-ionicons/lib/MdNutrition'
import MdHome from 'react-ionicons/lib/MdHome'

import styles from './styles/styles';
import Landing from './components/pages/Landing';
import Search from './components/pages/Search';
import MyGarden from './components/pages/MyGarden';

const searchIcon = <MdSearch color="black" fontSize="70"/>
const homeIcon = <MdHome color="black" fontSize="70"/>
const gardenIcon = <MdNutrition color="black" fontSize="70"/>

const Tab =  createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            showLabel: false,
            activeBackgroundColor: '#f5b70f',
          }}
          >
          <Tab.Screen name="Home" component={Landing} options={{ tabBarVisible: false, tabBarIcon: () => homeIcon }} />
          <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: () => searchIcon }}/>
          <Tab.Screen name="MyGarden" component={MyGarden} options={{ tabBarIcon: () => gardenIcon }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
