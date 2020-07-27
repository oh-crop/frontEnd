import React, {Component} from 'react';
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
      let plantInfo = this.state.plantInfo 
      plantInfo.last_watered = response.data.last_watered
      plantInfo.days_until_next_water = response.data.water_frequency
      this.setState({plantInfo: plantInfo})
    })
    .catch(err => console.log(err))
  }

  render () {
    // if(!this.state.isLoaded) {
    //   return <Text>LOADING</Text>
    // }
    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.plantChildName}>{this.state.plantInfo.plant_name}</Text>
            <Text style={styles.plantName}>{this.state.plantInfo.plant_type}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
          <Button
            onPress={() => this.waterPlant(this.state.plantInfo.gardenplant_id)}
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
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.last_watered}</Text>
              {/* placeholder below - will be adding this info from the API once it gets updated*/}
              <Text style={styles.plantAttrLabel}>Next Water in:</Text>
              <Text style={styles.plantAttrValue}>5 Days</Text>
              <Text style={styles.plantAttrLabel}>Harvest Date:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.harvest_date}</Text>
              {/* placeholder below - will be adding this info from the API once it gets updated*/}
              <Text style={styles.plantAttrLabel}>Harvest in:</Text>
              <Text style={styles.plantAttrValue}>{this.state.plantInfo.days_until_harvest}</Text>
            </View>
            <Button
              onPress={() => this.deletePlant(this.state.plantInfo.gardenplant_id)}
              title={'Click to delete your plant from the garden'} />
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
