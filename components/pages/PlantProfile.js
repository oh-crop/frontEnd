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
import api from '../../api/plantAPI';


export default class PlantProfile extends Component {
  state = {
    plantInfo: {}
  }

  componentDidMount() {
    this.getPlantInfo(this.props.route.params.id);
  }

  getPlantInfo = (id) => {

    api.getGardenPlantById(id)
    .then(response => this.setState({plantInfo: response.data}))
    .catch(err => console.log(err))
  }

  render () {
    console.log('props', this.props)
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.plantName}>{this.state.plantInfo.plant_type}</Text>
            <Text style={styles.plantChildName}>{this.state.plantInfo.plant_name}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
          {/* this image was removed and the icon was added - we can put the picture back once the image comes from API*/}
            <MaterialCommunityIcons
              style={styles.icon}
              name="flower"
              size={40} />
          </View>
          <View style={styles.plantContentContainer}>
            <View style={styles.plantChoresContent}>
              <Text style={styles.plantAttrLabel}>Last Watered On:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.last_watered}</Text>
              {/* placeholder below - will be adding this info from the API once it gets updated*/}
              <Text style={styles.plantAttrLabel}>Next Water in:</Text>
              <Text style={styles.plantAttrValue}>5 Days</Text>
              <Text style={styles.plantAttrLabel}>Harvest Date:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.harvest_date}</Text>
              {/* placeholder below - will be adding this info from the API once it gets updated*/}
              <Text style={styles.plantAttrLabel}>Harvest in:</Text>
              <Text style={styles.plantAttrValue}>200 Days</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              this.props.navigation.navigate('MyGardenPage')
            }}>
            <Text style={styles.backButton}>Go Back to My Garden</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
