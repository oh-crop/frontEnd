import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../styles/styles';

export default function PlantItem ({ title, image, navigation, id }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PlantInfoPage', {id: id});
        navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false });
      }} >
      <View style={[styles.plantItemContainer, styles.borderRadius]}>
        <Image style={[styles.meetAPlant, styles.borderRadius]} source={{uri: image}}/>
        <Text style={styles.searchPageText}>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
}
