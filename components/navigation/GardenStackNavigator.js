import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyGardenPage from '../pages/MyGarden';
import PlantProfilePage from '../pages/PlantProfile';

const GardenStack = createStackNavigator();

export default function GardenStackNavigator() {
  return (
    <GardenStack.Navigator
      initialPage="MyGardenPage"
      screenOptions={{ headerShown: false }}
      >
      <GardenStack.Screen name="MyGardenPage" component={MyGardenPage}/>
      <GardenStack.Screen name="PlantProfilePage" component={PlantProfilePage}/>
    </GardenStack.Navigator>
  );
}
