import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './components/navigation/TabNavigation';
import Landing from './components/pages/Landing';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        >
        <Stack.Screen
          name="Home"
          component={ Landing }/>
        <Stack.Screen
          name="TabNavigation"
          component={ TabNavigation }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
