import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles/styles';
import Landing from './components/pages/Landing';
import Search from './components/pages/Search';
import MyGarden from './components/pages/MyGarden';

const Tab =  createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" >
          <Tab.Screen name="Home" component={Landing} options={{ title: 'HomeScreen', tabBarVisible: false }} />
          <Tab.Screen name="Search" component={Search} options={{ title: 'Search Screen' }}/>
          <Tab.Screen name="MyGarden" component={MyGarden} options={{ title: 'My Garden Screen' }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
