import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import backgroundImg from '../../assets/plant_info_background.jpg';


export default class PlantProfile extends Component {
  state = {
    plantInfo: {
      "date_added": "Sat, 25 Jul 2020 20:28:01 GMT",
      "gardenplant_id": 50,
      "harvest_date": "Tue, 24 Nov 2020 00:00:00 GMT",
      "last_watered": "Sat, 26 Jul 2020 20:28:01 GMT",
      "plant_name": "Greg",
      "plant_type": "Lime"
    }
  }


  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.plantName}>{this.state.plantInfo.plant_type}</Text>
            <Text style={styles.plantChildName}>{this.state.plantInfo.plant_name}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
          {/* this image was removed and the icon was added*/}
            <MaterialCommunityIcons
              style={styles.icon}
              name="flower"
              size={40} />
          </View>
          <View style={styles.plantContentContainer}>
            <View style={styles.plantChoresContent}>
              <Text style={styles.plantAttrLabel}>Last Watered On:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.last_watered}</Text>
              <Text style={styles.plantAttrLabel}>Harvest Date:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.harvest_date}</Text>
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
}
