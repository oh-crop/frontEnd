import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    .then(response => {})
    .catch(err => console.log(err))
  }

  const deletePlant = async (id) => {
    await deletePlantFromGarden(id)
    await navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
    await navigation.navigate('MyGardenPage', {deleteMessage: "You deleted your plant"})
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
      <ImageBackground source={backgroundImg} style={styles.greenCropBackground}>
        <View style={styles.plantInfoHeader}>
          <Text style={styles.plantChildName}>{plantInfo.plant_name}</Text>
          <Text style={styles.plantName}>{plantInfo.plant_type}</Text>
        </View>
        <View style={styles.transparentSubHeader}></View>
        <View style={styles.plantImgContainer}>
        <Button
          onPress={() => waterPlant(plantInfo.gardenplant_id)}
          title={"Click when you've watered"} />
        {/* this image was removed and the icon was added - we can put the picture back once the image comes from API*/}
          <MaterialCommunityIcons
            style={styles.icon}
            name="flower"
            size={40} />
        </View>
        <View style={styles.plantContentContainer}>
          <View style={styles.plantChoresContent}>
            <Text style={styles.plantAttrLabel}>Last Watered On:</Text>
            <Text style={styles.plantAttrValue}>{plantInfo.last_watered}</Text>
            {/* placeholder below - will be adding this info from the API once it gets updated*/}
            <Text style={styles.plantAttrLabel}>Next Water in:</Text>
            <Text style={styles.plantAttrValue}>{plantInfo.days_until_next_water} Days</Text>
            <Text style={styles.plantAttrLabel}>Harvest Date:</Text>
            <Text style={styles.plantAttrValue}>{plantInfo.harvest_date}</Text>
            {/* placeholder below - will be adding this info from the API once it gets updated*/}
            <Text style={styles.plantAttrLabel}>Harvest in:</Text>
            <Text style={styles.plantAttrValue}>{plantInfo.days_until_harvest}</Text>
          </View>
          <Button
            onPress={() => deletePlant(plantInfo.gardenplant_id)}
            title={'Click to delete your plant from the garden'} />
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
