import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles/styles';
import plantImg from '../../assets/meet-a-plant-example.jpg';

export default function PlantInfo({ navigation: { dangerouslyGetParent, navigate } }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.plantInfoHeader}>
        <Text style={styles.plantName}>
          Dill
        </Text>
      </View>

      <View style={styles.plantImgContainer}>
        <Image
          style={styles.plantImg}
          source={{uri: plantImg}}/>
      </View>

      <View style={styles.plantInfoContent}>
        <Text style={styles.plantAttrLabel}>
          Lighting:
            <Text style={styles.plantAttrValue}>
              Full Sun
            </Text>
        </Text>
        <Text style={styles.plantAttrLabel}>
          How Often To Water:
            <Text style={styles.plantAttrValue}>
              Every 2 days
            </Text>
        </Text>
        <Text style={styles.plantAttrLabel}>
          Seed To Harvest:
            <Text style={styles.plantAttrValue}>
              70 Days
            </Text>
        </Text>
        <Text style={styles.plantAttrLabel}>
          Root Depth:
            <Text style={styles.plantAttrValue}>
              2 Inches
            </Text>
        </Text>
        <Text style={styles.plantAttrLabel}>
          Perennial/Annual:
            <Text style={styles.plantAttrValue}>
              Annual
            </Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          dangerouslyGetParent().setOptions({ tabBarVisible: true })
          navigate('SearchPage')}
        }>
        <Text style={styles.goBackButton}>
          Go Back to Search
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
