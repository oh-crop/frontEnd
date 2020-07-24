import React from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import styles from '../../styles/styles';


export default function MyGarden(props) {
  return (
    <View style={styles.myGardenContainer}>
    <View style={styles.myGardenHeader}>
      <Text style={{color: 'black'}}>
        My Garden
      </Text>
      </View>
      <TouchableOpacity style={styles.myGardenBody}>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower"  
            size={40}
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Jimothy</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower"
            size={40}  
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Donna</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
        <View style={styles.myGardenPlants}>
          <MaterialCommunityIcons 
            style={styles.icon}
            name="flower" 
            size={40} 
            onPress={() => props.navigation.navigate('PlantProfilePage')} />
          <Text style={styles.text}>Bo-Jangles</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
