import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import styles from '../../styles/styles';
import backgroundImg from '../../assets/plant_info_background.png';
import sunflowerImg from '../../assets/sunflower.png';

export default function PlantInfo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        style={styles.backgroundImg}
        >
        <View style={styles.plantInfoHeader}>
          <Text style={styles.plantName}>Sunflower</Text>
        </View>
        <View style={styles.plantImgWrapper}></View>
        <View style={styles.plantImgContainer}>
          <Image
            style={styles.plantImg}
            source={{uri: sunflowerImg}}/>
        </View>
        <View style={styles.plantInfoContentContainer}>
          <View style={styles.plantInfoContent}>
            <Text style={styles.plantAttrLabel}>Lighting:
              <Text style={styles.plantAttrValue}>Full Sun</Text>
            </Text>
            <Text style={styles.plantAttrLabel}>How Often To Water:
              <Text style={styles.plantAttrValue}>Every 2 days</Text>
            </Text>
            <Text style={styles.plantAttrLabel}>Seed To Harvest:
              <Text style={styles.plantAttrValue}>70 Days</Text>
            </Text>
            <Text style={styles.plantAttrLabel}>Root Depth:
              <Text style={styles.plantAttrValue}>2 Inches</Text>
            </Text>
            <Text style={styles.plantAttrLabel}>Perennial/Annual:
              <Text style={styles.plantAttrValue}>Annual</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
            navigation.navigate('SearchPage')}
          }
          >
          <Text style={styles.goBackButton}>Go Back to Search</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
