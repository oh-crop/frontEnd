import React from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';

import styles from '../styles/styles';

export default function PlantItem ({ title, image, searchNavigation, tabNavigation: {  dangerouslyGetParent} }) {
  return (
    <TouchableHighlight
      onPress={() => {
        searchNavigation.navigate('PlantInfoPage');
        dangerouslyGetParent().setOptions({ tabBarVisible: false });
      }}
      >
      <View>
        <Image
          style={styles.meetAPlant}
          source={{uri: image}}/>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}
