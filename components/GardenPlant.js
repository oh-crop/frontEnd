import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/styles';

export default function GardenPlant ({ info, navigation, navigation: { dangerouslyGetParent } }) {
  return (
    <TouchableOpacity
      style={styles.myGardenBody}
      onPress={() => {
        navigation.navigate('PlantProfilePage');
        dangerouslyGetParent().setOptions({ tabBarVisible: false });
      }}>
      <View style={styles.myGardenPlants}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="flower"
          size={40} />

        <Text style={styles.text}>{info.plant_name}</Text>
      </View>
    </TouchableOpacity>
  );
}
