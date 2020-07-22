import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from '../../styles/styles';

export default function Landing(props) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.button} onPress={ () => props.navigation.navigate('TabNavigation', { screen: 'Search'}) }>
        <Text style={styles.text}>Search Plants</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => props.navigation.navigate('TabNavigation', { screen: 'Garden' }) }>
        <Text style={styles.text}>My Garden</Text>
      </TouchableOpacity>
    </View>
  );
}
