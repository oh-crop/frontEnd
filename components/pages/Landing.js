import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../styles/styles';
import logo from '../../assets/logo.png'
import { OpacityButton } from '../buttons/OpacityButton'

const landingButtonStyle = [styles.landingButtons, styles.borderRadius, styles.boxShadow]
const landingButtonTextStyle = styles.textLight

export default function Landing({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image
        source={logo}
        style={ styles.logo }
        testID={'Landing.Image'}/>
      <OpacityButton
        text={ 'Search Plants' }
        pressFunction={ () => navigation.navigate('TabNavigation', { screen: 'Search'}) }
        textStyle={ landingButtonTextStyle }
        buttonStyle={ landingButtonStyle }/>
      <OpacityButton
        text={ 'My Garden' }
        pressFunction={ () => navigation.navigate('TabNavigation', { screen: 'Garden'}) }
        textStyle={ landingButtonTextStyle }
        buttonStyle={ landingButtonStyle }/>
    </View>
  );
}
