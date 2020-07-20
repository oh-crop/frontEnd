import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles/styles';
import Landing from './components/pages/Landing';
import Search from './components/pages/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Landing} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
