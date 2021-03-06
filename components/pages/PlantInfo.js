import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles/styles';
import backgroundImg from '../../assets/plant_info_background.jpg';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../api/plantAPI';
import { OpacityButton } from '../buttons/OpacityButton'

export default function PlantInfo ({route, navigation}) {

  const [plantInfo, setPlantInfo] = useState({});

  useEffect(() => {
     const getPlant = navigation.addListener('focus', () => {
       getPlantId(route.params.id)
     });

     return getPlant;
   }, [navigation]);

  const getPlantId = (id) => {
    api.getPlantById(id)
    .then(response => setPlantInfo(response.data))
    .catch(err => console.log(err))
  }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.headerText}>{plantInfo.plant_type}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
            <Image
              style={styles.plantImg}
              source={{uri: plantInfo.plant_image}}/>
          </View>
          <View style={[styles.plantContentContainer, styles.boxShadow]}>
            <View style={[styles.plantContent, styles.borderRadius]}>
              <Text style={styles.plantAttrLabel}>Lighting:</Text>
              <Text style={styles.plantAttrValue}>{plantInfo.lighting}</Text>
              <Text style={styles.plantAttrLabel}>How Often To Water:</Text>
              <Text style={styles.plantAttrValue}>{plantInfo.days_between_water} Days</Text>
              <Text style={styles.plantAttrLabel}>Seed To Harvest:</Text>
              <Text style={styles.plantAttrValue}>{plantInfo.days_to_harvest_from_seed} Days</Text>
              <Text style={styles.plantAttrLabel}>Root Depth:</Text>
              <Text style={styles.plantAttrValue}>{plantInfo.root_depth_in} Inches</Text>
              <Text style={styles.plantAttrLabel}>Plant Lifecycle: </Text>
              <Text style={styles.plantAttrValue}>{plantInfo.lifecycle}</Text>
              <TouchableOpacity
                style={styles.addPlantBtnContainer}
                onPress={() => {
                  navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false })
                  navigation.navigate('NamePlant', {id: plantInfo.id, image: plantInfo.plant_image})}}>
                <MaterialIcons name="add" size={45}  style={styles.addPlantBtn} />
                <Text style={[styles.addPlantBtnText]}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
          <OpacityButton
            text={ 'Back to Search' }
            pressFunction={() => {
              navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              navigation.navigate('SearchPage')}}
            textStyle={ styles.backButton }
            buttonStyle={ styles.backButtonContainer }/>
        </ImageBackground>
      </SafeAreaView>
    );
}
