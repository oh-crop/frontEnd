import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default function MyGarden() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>
        YOU MADE IT TO YOUR GARDEN!!
      </Text>
    </View>
  );
}
