import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

export default function GardenPlant ({ title, image, navigation, navigation: { dangerouslyGetParent } }) {
  return (
    <TouchableHighlight
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

        <Text style={styles.text}>Jimothy</Text>
      </View>
    </TouchableHighlight>
  );
}
