import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import dirtBackground from '../../assets/dirt.png';

export default function MyGarden(props) {
  return (
    <SafeAreaView 
      style={styles.myGardenContainer}>
      <ImageBackground
        style={styles.dirtBackground}
        source={dirtBackground}>
        <View style={styles.myGardenContainer}>
          <View style={styles.myGardenHeader}>
            <Text style={{color: 'white'}}>
              My Garden
            </Text>
          </View>
            <View style={styles.myGarden}>
              <TouchableOpacity 
                style={styles.myGardenBody}>
                <View style={styles.myGardenPlants}>
                  <MaterialCommunityIcons 
                    style={styles.icon}
                    name="flower"  
                    size={40}
                    onPress={() => props.navigation.navigate('PlantProfilePage')} />
                  <Text style={styles.text}>Jimothy</Text>
                </View>
              </TouchableOpacity> 
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
