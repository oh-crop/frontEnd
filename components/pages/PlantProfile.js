import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import styles from '../../styles/styles';
import backgroundImg from '../../assets/plant_info_background.jpg';
import api from '../../api/plantAPI';


export default function PlantProfile({ route, navigation }) {

  const [plantInfo, setPlantInfo] = useState({})
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
     const updatePlant = navigation.addListener('focus', () => {
       getPlantInfo(route.params.id)
       setToggle(false)
     });

     return updatePlant;
   }, [navigation]);

  const getPlantInfo = (id) => {
    api.getGardenPlantById(id)
    .then(response => setPlantInfo(response.data))
    .catch(err => console.log(err))
  }

  const deletePlantFromGarden = (id) => {
    api.deleteGardenPlant(id)
      .then(response => alert(`${response.data.plant_name} has now been deleted!`))
      .catch(err => console.log(err))
  }

  const deletePlant = async (id) => {
    await deletePlantFromGarden(id)
    await navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
    await navigation.navigate('MyGardenPage')
  }

  const waterPlant = (id) => {
    api.waterPlant(id)
      .then(response => {
      let copyInfo = plantInfo
      copyInfo.last_watered = response.data.last_watered
      copyInfo.days_until_next_water =  response.data.water_frequency
      setPlantInfo(copyInfo)
      setToggle(true)
    })
    .catch(err => console.log(err))
  }


    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.headerText}>{plantInfo.plant_name}</Text>
            <Text style={styles.plantName}>{plantInfo.plant_type}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="flower"
              size={70} />
          </View>
          <View style={styles.plantContentContainer}>
            <View style={[styles.plantProfileContainer, styles.borderRadius]}>
              <View style={styles.plantChoresContent}>
                <Text style={styles.plantProfileAttrLabel}>Last Watered On:</Text>
                <Text style={styles.plantProfileAttrValue}>{plantInfo.last_watered}</Text>

                <Text style={styles.plantProfileAttrLabel}>Next Water in:</Text>
                <Text style={styles.plantProfileAttrValue}>5 Days</Text>

                <Text style={styles.plantProfileAttrLabel}>Harvest Date:</Text>
                <Text style={styles.plantProfileAttrValue}>{plantInfo.harvest_date}</Text>

                <Text style={styles.plantProfileAttrLabel}>Harvest in:</Text>
                <Text style={styles.plantProfileAttrValue}>{plantInfo.days_until_harvest} Days</Text>
              </View>

              <View style={styles.plantActionsContainer}>
                <TouchableOpacity
                  style={styles.actionButtons}
                  onPress={() => this.waterPlant(plantInfo.gardenplant_id)}>
                  <Entypo name="water" size={24} color="#0774B9" />
                  <Text style={styles.waterButtonText}>Water</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButtons}
                  onPress={() => this.deletePlant(plantInfo.gardenplant_id)}>
                  <MaterialCommunityIcons name="shovel" size={24} color="#9e020f" />
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              navigation.navigate('MyGardenPage')}}>
            <Text style={styles.backButton}>
              Go Back to My Garden
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
}
