import React, {Component} from 'react';
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
import api from '../../api/plantAPI';

export default class PlantInfo extends Component {
  state = {
    plantInfo: {}
   }

  componentDidMount() {
    this.getPlantId(this.props.route.params.id)
  }

  getPlantId = (id) => {
    api.getPlantById(id)
      .then(response => this.setState({plantInfo: response.data}))
      .catch(err => console.log(err))
  }

  render () {
    let plantData = this.state.plantInfo;

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}>
          <View style={styles.plantInfoHeader}>
            <Text style={styles.headerText}>{plantData.plant_type}</Text>
          </View>
          <View style={styles.transparentSubHeader}></View>
          <View style={styles.plantImgContainer}>
            <Image
              style={styles.plantImg}
              source={{uri: plantData.plant_image}}/>
          </View>
          <View style={styles.plantContentContainer}>
            <View style={[styles.plantContent, styles.borderRadius]}>
              <Text style={styles.plantAttrLabel}>Lighting:</Text>
              <Text style={styles.plantAttrValue}>{plantData.lighting}</Text>

              <Text style={styles.plantAttrLabel}>How Often To Water:</Text>
              <Text style={styles.plantAttrValue}>{plantData.days_between_water} Days</Text>

              <Text style={styles.plantAttrLabel}>Seed To Harvest:</Text>
              <Text style={styles.plantAttrValue}>{plantData.days_to_harvest_from_seed} Days</Text>

              <Text style={styles.plantAttrLabel}>Root Depth:</Text>
              <Text style={styles.plantAttrValue}>{plantData.root_depth_in} Inches</Text>

              <Text style={styles.plantAttrLabel}>Plant Lifecycle: </Text>
              <Text style={styles.plantAttrValue}>{plantData.lifecycle} Days</Text>
            </View>
          </View>

          <View style={styles.plantActionsContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false })
                this.props.navigation.navigate('NamePlant', {id: plantData.id})}}>

              <Text style={styles.textLight}>Add to Garden</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              this.props.navigation.navigate('SearchPage')}}>
            <Text style={styles.backButton}> Back to Search</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
