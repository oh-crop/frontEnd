import React, { useState } from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native';

import GardenPlant from '../GardenPlant';
import styles from '../../styles/styles';
import dirtBackground from '../../assets/dirt.png';
import api from '../../api/plantAPI'

export default function ({ navigation, route }) {
  const [gardenPlants, setGardenPlants] = useState([]);
  const [toggle, setToggle] = useState(false);

  React.useEffect(() => {
     const updatePlants = navigation.addListener('focus', () => {
       getAllGardenPlants()
     });

     return updatePlants;
   }, [navigation]);

  const getAllGardenPlants = () => {
    api.getAllGardenPlants()
    .then(response => {
      setGardenPlants(response.data)
    })
    .catch(err => console.log(err))
  }

  const deleteAPlant = () => {
    console.log(route.params === 'undefined')
    if(typeof route.params === 'undefined') {
      return ''
    } else {
      return route.params.deleteMessage
    }
  }

  return (
    <SafeAreaView style={styles.myGardenContainer}>
      <ImageBackground
        style={styles.dirtBackground}
        source={dirtBackground}>
        <View style={styles.myGardenContainer}>
          <View style={styles.myGardenHeader}>
            <Text style={{color: 'white'}}>My Garden</Text>
            <Text>{deleteAPlant()}</Text>
          </View>
          <ScrollView >
            <View style={styles.myGarden}>
              {gardenPlants.map( plant => {
                return(
                  <GardenPlant navigation={ navigation } info={plant} key={plant.id}/>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
