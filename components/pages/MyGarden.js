import React from 'react';
import { View, Text, ImageBackground, SafeAreaView} from 'react-native';

import GardenPlant from '../GardenPlant';
import styles from '../../styles/styles';
import dirtBackground from '../../assets/dirt.png';

export default function MyGarden({ navigation }) {
  return (
    <SafeAreaView style={styles.myGardenContainer}>
      <ImageBackground
        style={styles.dirtBackground}
        source={dirtBackground}>
        <View style={styles.myGardenContainer}>
          <View style={styles.myGardenHeader}>
            <Text style={{color: 'white'}}>My Garden</Text>
          </View>
          <View style={styles.myGarden}>
            <GardenPlant navigation={ navigation }/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
