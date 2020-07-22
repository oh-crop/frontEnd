import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles/styles';
import TabNavigation from './components/navigation/TabNavigation'
import Landing from './components/pages/Landing'
// import Search from './components/pages/Search'
// import MyGarden from './components/pages/MyGarden'

const Stack = createStackNavigator();

// <Tab.Screen name="Home" component={Landing} options={{ tabBarVisible: false, tabBarIcon: () => homeIcon }} />
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          >
          <Stack.Screen name="Home" component={Landing} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
