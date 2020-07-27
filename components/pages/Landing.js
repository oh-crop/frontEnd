import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from '../../styles/styles';

export default function Landing({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image
        source={require('../../assets/logo.png')}
        style={ styles.logo }/>
      <TouchableOpacity
        style={[styles.landingButtons, styles.borderRadius, styles.boxShadow]}
        onPress={() => navigation.navigate('TabNavigation', { screen: 'Search'})}
        >
        <Text style={ styles.textLight }>
          Search Plants
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.landingButtons, styles.borderRadius, styles.boxShadow]}
        onPress={() => navigation.navigate('TabNavigation', { screen: 'Garden' })}
        >
        <Text style={ styles.textLight }>
          My Garden
        </Text>
      </TouchableOpacity>
    </View>
  );
}
