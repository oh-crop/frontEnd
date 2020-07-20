import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default function Search() {
  console.log('here')
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>
        YOU MADE IT TO SEARCH!!
      </Text>
    </View>
  );
}
