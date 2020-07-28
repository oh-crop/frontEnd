import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from '../pages/Search';
import PlantInfoPage from '../pages/PlantInfo';
import NamePlant from '../pages/NamePlant';

const SearchStack = createStackNavigator();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator
      initialPage="SearchPage"
      screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name='SearchPage' component={SearchPage}/>
      <SearchStack.Screen name='PlantInfoPage' component={PlantInfoPage}/>
      <SearchStack.Screen name='NamePlant' component={NamePlant} />
    </SearchStack.Navigator>
  );
}
