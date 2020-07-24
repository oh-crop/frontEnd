import React from 'react'
import { View, Text, SafeAreaView, Image, Button } from 'react-native'

import styles from '../../styles/styles';
import plantImg from '../../assets/meet-a-plant-example.jpg';

export default function PlantInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.plantInfoHeader}>
        <Text style={styles.nameText}>DILL</Text>
      </View>
      <View style={styles.plantIconContainer}>
        <Image
          style={styles.plantIcon}
          source={{uri: plantImg}}
        />
      </View>
      <View style={styles.plantInfoContent}>
        <Text style={styles.textContent}>
          Lighting:
            <Text style={{color: '#E3CBB5', paddingLeft: 10, paddingLeft: 10}}>
              Full Sun
            </Text>
        </Text>
        <Text style={styles.textContent}>
          How Often To Water:
            <Text style={{color: '#E3CBB5', paddingLeft: 10}}>
              Every 2 days
            </Text>
        </Text>
        <Text style={styles.textContent}>
          Seed To Harvest:
            <Text style={{color: '#E3CBB5', paddingLeft: 10}}>
              70 Days
            </Text>
        </Text>
        <Text style={styles.textContent}>
          Root Depth:
            <Text style={{color: '#E3CBB5', paddingLeft: 10}}>
              2 Inches
            </Text>
        </Text>
        <Text style={styles.textContent}>
          Perennial/Annual:
            <Text style={{color: '#E3CBB5', paddingLeft: 10}}>
              Annual
            </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
