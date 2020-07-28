import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/styles';

export default function GardenPlant ({ info, navigation }) {

  return (
    <TouchableOpacity
      style={styles.myGardenBody}
      onPress={() => {
        navigation.navigate('PlantProfilePage', {id: info.id});
        navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false })}}
        testID="GardenPlant.TouchableOpacity">
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="flower"
            size={50}
            testID="GardenPlant.Icon"/>
        </View>
        <View>
          <Text style={[styles.textLight, styles.gardenPlantText]}>{info.plant_name}</Text>
        </View>
    </TouchableOpacity>
  );
}
