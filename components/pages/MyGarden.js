import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native';

import GardenPlant from '../GardenPlant';
import styles from '../../styles/styles';
import dirtBackground from '../../assets/dirt.png';
import api from '../../api/plantAPI'

export default class MyGarden extends Component {
  state = {
    gardenPlants: [],
  }

  componentDidMount() {
    this.getAllGardenPlants()
  }

  componentDidUpdate() {
    this.getAllGardenPlants()
  }

  getAllGardenPlants = () => {
    api.getAllGardenPlants()
    .then(response => {
      this.setState({gardenPlants: response.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <SafeAreaView style={styles.myGardenContainer}>
        <ImageBackground
          style={styles.dirtBackground}
          source={dirtBackground}>
          <View style={styles.myGardenContainer}>
            <View style={styles.myGardenHeader}>
              <Text style={{color: 'white'}}>My Garden</Text>
            </View>
            <ScrollView >
              <View style={styles.myGarden}>
                {this.state.gardenPlants.map( plant => {
                  return(
                    <GardenPlant navigation={ this.props.navigation } info={plant} key={plant.id}/>
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
