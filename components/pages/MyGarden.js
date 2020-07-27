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

  getAllGardenPlants = () => {
    api.getAllGardenPlants()
    .then(response => {
      this.setState({gardenPlants: response.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>

        <ImageBackground
          style={styles.dirtBackground}
          source={dirtBackground}>

          <View style={styles.myGardenHeader}>
            <Text style={styles.headerText}>My Garden</Text>
          </View>

          <View style={styles.myGardenContent}>


            <ScrollView>
              <View style={styles.myGarden}>
                {this.state.gardenPlants.map( plant => {
                  return(
                    <GardenPlant
                      navigation={ this.props.navigation }
                      info={plant} key={plant.id}/>
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
