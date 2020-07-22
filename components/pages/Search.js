import React, {Component} from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, TouchableHighlight  } from 'react-native';
import PlantItem from '../PlantItem';
import imagePlaceholder from '../../assets/meet-a-plant-example.jpg'

import styles from '../../styles/styles';



export default class Search extends Component {
  state = {
    searchResults: [ {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },],
    hasSearched: false
  };

  meetThePlant = () => (
    <SafeAreaView>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchbox} placeholder={'Search'}/>
      </View>
      <PlantItem title={'Plant1'} image={imagePlaceholder}/>
  </SafeAreaView>
  )

  searchResults = () => (
    <SafeAreaView>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchbox} placeholder={'Search'}/>
      </View>
        <FlatList 
          style={styles.searchResultsContainer}
          data={this.state.searchResults}
          renderItem={({item, index, separators}) => (
            <PlantItem title={item.title} image={imagePlaceholder}/>
          )}
        />
      </SafeAreaView>
  )
  
  render () {
    return !this.state.hasSearched 
      ? this.meetThePlant()
      : this.searchResults()
  }
}
