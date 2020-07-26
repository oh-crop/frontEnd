import React from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';

import styles from '../styles/styles';

export default function PlantItem ({ title, image, navigation }) {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('PlantInfoPage');
        navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false });
      }} >
      <View>
        <Image style={styles.meetAPlant} source={{uri: image}}/>
        <Text>{ title }</Text>
      </View>
    </TouchableHighlight>
  );
}
