import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../../styles/styles';

export default function MyGarden({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={{color: 'black'}}>
        YOU MADE IT TO YOUR GARDEN!!
      </Text>
      <Button
        title= 'Go to Plant Profile Page'
        onPress={() => navigation.navigate('PlantProfilePage')}/>
    </View>
  );
}
