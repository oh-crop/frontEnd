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

export default function PlantProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.greenCropBackground}>
        <View style={styles.plantInfoHeader}>
          <Text style={styles.plantName}>Sunflower</Text>
          <Text style={styles.plantChildName}>Jimothy</Text>
        </View>
        <View style={styles.transparentSubHeader}></View>
        <View style={styles.plantImgContainer}>
          <Image style={styles.plantImg} source={{uri: sunflowerImg}}/>
        </View>
        <View style={styles.plantContentContainer}>
          <View style={styles.plantChoresContent}>
            <Text style={styles.plantAttrLabel}>Last Watered On:</Text>
            <Text style={styles.plantAttrValue}>placeholder text</Text>

            <Text style={styles.plantAttrLabel}>Harvest Date:</Text>
            <Text style={styles.plantAttrValue}>placeholder text</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => {
            navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
            navigation.navigate('MyGardenPage')
          }}>
          <Text style={styles.backButton}>Go Back to My Garden</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
