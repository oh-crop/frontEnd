import React from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import styles from '../../styles/styles';


export default function MyGarden(props) {
  return (
    <View style={styles.myGardenContainer}>
      <Text style={{color: 'black'}}>
        My Garden
      </Text>
      <TouchableOpacity
        
        onPress={() => props.navigation.navigate('PlantProfilePage')}>
        <View>
        <Ionicons name="md-flower" size={40} color="black" />
        <Text>Jimothy</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
