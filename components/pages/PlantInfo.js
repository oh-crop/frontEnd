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
    let plantData = this.state.plantInfo
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}
          >
          <View style={styles.plantInfoHeader}>
          {/*The style below may need to be changed since we switched these in the plantProfile page*/}
            <Text style={styles.plantChildName}>{plantData.plant_type}</Text>
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
              <Text style={styles.plantAttrValue}>{plantData.days_between_water} days</Text>
              <Text style={styles.plantAttrLabel}>Seed To Harvest:</Text>
              <Text style={styles.plantAttrValue}>{plantData.days_to_harvest_from_seed} days</Text>
              <Text style={styles.plantAttrLabel}>Root Depth:</Text>
              <Text style={styles.plantAttrValue}>{plantData.root_depth_in} inches</Text>
              <Text style={styles.plantAttrLabel}>Plant Lifecycle: </Text>
              <Text style={styles.plantAttrValue}>{plantData.lifecycle}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false })
              this.props.navigation.navigate('NamePlant', {id: plantData.id})}
            }>
            <View>
              <Text
              style={styles.text}>Add Plant to Garden</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
              this.props.navigation.navigate('SearchPage')}
            }
            >
            <Text style={styles.backButton}>Go Back to Search</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
