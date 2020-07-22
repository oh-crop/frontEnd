import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from '../pages/Search'
import PlantInfoPage from '../pages/PlantInfo'

const SearchStack = createStackNavigator()

export default function SearchStackNavigator(){
  return(
    <SearchStack.Navigator
      initialPage="SearchPage"
      screenOptions={{ headerShown: false }}
    >
      <SearchStack.Screen name="SearchPage" component={SearchPage}/>
      <SearchStack.Screen name="PlantInfoPage" component={PlantInfoPage}/>
    </SearchStack.Navigator>
  )
}
