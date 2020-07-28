import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../styles/styles';

export default function PlantItem ({ title, image, navigation, id }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PlantInfoPage', {id: id})
        navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false })}}>
      <View style={[styles.plantItemContainer, styles.borderRadius, styles.boxShadow]}>
        <Text style={styles.searchResultText}>{title}</Text>
        <Image
          style={[styles.meetAPlantImg, styles.borderRadius]}
          source={{uri: image}}/>
      </View>
    </TouchableOpacity>
  );
}
