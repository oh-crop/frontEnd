import React, {Component} from 'react';
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


export default class PlantProfile extends Component {
  state = {
    plantInfo: {},
    isLoaded: false
  }

  componentDidMount() {
    this.getPlantInfo(this.props.route.params.id)
  }

  getPlantInfo = (id) => {
    api.getGardenPlantById(id)
      .then(response => this.setState({plantInfo: response.data, isLoaded: true}))
      .catch(err => console.log(err))
  }

  deletePlantFromGarden = (id) => {
    api.deleteGardenPlant(id)
      .then(response => alert(`${response.data.plant_name} has now been deleted!`))
      .catch(err => console.log(err))
  }

  deletePlant = async (id) => {
    await this.deletePlantFromGarden(id)
    await this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
    await this.props.navigation.navigate('MyGardenPage')
  }

  waterPlant = (id) => {
    api.waterPlant(id)
      .then(response => {
        let plantInfo = this.state.plantInfo;
        plantInfo.last_watered = response.data.last_watered;
        plantInfo.days_until_next_water = response.data.water_frequency;
        this.setState({plantInfo: plantInfo});
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.headerText}>{this.state.plantInfo.plant_name}</Text>
            <Text style={styles.plantName}>{this.state.plantInfo.plant_type}</Text>
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
                <Text style={styles.plantProfileAttrValue}>{this.state.plantInfo.last_watered}</Text>

                <Text style={styles.plantProfileAttrLabel}>Next Water in:</Text>
                <Text style={styles.plantProfileAttrValue}>5 Days</Text>

                <Text style={styles.plantProfileAttrLabel}>Harvest Date:</Text>
                <Text style={styles.plantProfileAttrValue}>{this.state.plantInfo.harvest_date}</Text>

                <Text style={styles.plantProfileAttrLabel}>Harvest in:</Text>
                <Text style={styles.plantProfileAttrValue}>{this.state.plantInfo.days_until_harvest} Days</Text>
              </View>

              <View style={styles.plantActionsContainer}>
                <TouchableOpacity
                  style={styles.actionButtons}
                  onPress={() => this.waterPlant(this.state.plantInfo.gardenplant_id)}>
                  <Entypo name="water" size={24} color="#0774B9" />
                  <Text style={styles.waterButtonText}>Water</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButtons}
                  onPress={() => this.deletePlant(this.state.plantInfo.gardenplant_id)}>
                  <MaterialCommunityIcons name="shovel" size={24} color="#9e020f" />
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              this.props.navigation.navigate('MyGardenPage')}}>
            <Text style={styles.backButton}>
              Go Back to My Garden
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
