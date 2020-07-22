import React from 'react';
import { View, Text, Image} from 'react-native';

import styles from '../styles/styles';

export default function PlantItem (props) {
  return(
    <View>
      <Image
        style={styles.meetAPlant}
        source={{uri: props.image}}
      />
      <Text>{props.title}</Text>
    </View>
  )
}
