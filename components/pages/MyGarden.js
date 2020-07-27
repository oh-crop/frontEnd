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
    setToggle(true)
  }

  const mapGardenPlants = () => {
    if(gardenPlants.length > 0) {
      return gardenPlants.map( plant => {
        return (
          <GardenPlant navigation={ navigation } info={plant} key={plant.id}/>
        )
      })
    } else {
      return <Text style={styles.text}>{gardenPlants.info}</Text>
    }
  }

  return (
    console.log('gardenPlants', gardenPlants),
    console.log('gardenPlants.info', gardenPlants.info),
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
              {mapGardenPlants()}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
