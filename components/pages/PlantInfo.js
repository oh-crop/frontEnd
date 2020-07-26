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
import backgroundImg from '../../assets/plant_info_background.jpg';
import sunflowerImg from '../../assets/sunflower.jpg';

export default function PlantInfo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        style={styles.greenCropBackground}>
        <View style={styles.plantInfoHeader}>
          <Text style={styles.plantName}>Sunflower</Text>
        </View>
        <View style={styles.transparentSubHeader}></View>
        <View style={styles.plantImgContainer}>
          <Image style={styles.plantImg} source={{uri: sunflowerImg}}/>
        </View>
        <View style={styles.plantContentContainer}>
          <View style={styles.plantContent}>
            <Text style={styles.plantAttrLabel}>Lighting:</Text>
            <Text style={styles.plantAttrValue}>Full Sun</Text>

            <Text style={styles.plantAttrLabel}>How Often To Water:</Text>
            <Text style={styles.plantAttrValue}>Every 2 days</Text>

            <Text style={styles.plantAttrLabel}>Seed To Harvest:</Text>
            <Text style={styles.plantAttrValue}>70 Days</Text>

            <Text style={styles.plantAttrLabel}>Root Depth:</Text>
            <Text style={styles.plantAttrValue}>2 Inches</Text>

            <Text style={styles.plantAttrLabel}>Plant Lifecycle:</Text>
            <Text style={styles.plantAttrValue}>Annual</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => {
            navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
            navigation.navigate('SearchPage')
          }}>
          <Text style={styles.backButton}>Go Back to Search</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
