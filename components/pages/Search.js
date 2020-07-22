import React, {Component} from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, TouchableHighlight  } from 'react-native';

import PlantItem from '../PlantItem';
import ImagePlaceholder from '../../assets/meet-a-plant-example.jpg';
import SearchBar from '../SearchBar';
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
    hasSearched: true
  };

  meetThePlant = () => (
    <SafeAreaView>
      <PlantItem title={'Plant1'} image={ImagePlaceholder}/>
    </SafeAreaView>
  )

  searchResults = () => (
    <SafeAreaView>
      <FlatList 
        style={styles.searchResultsContainer}
        data={this.state.searchResults}
        renderItem={({item, index, separators}) => (
          <PlantItem title={item.title} image={ImagePlaceholder}/>
        )}
      />
    </SafeAreaView>
  )
  
  render () {
    return (
      <View>
        <SearchBar />
        {!this.state.hasSearched 
          ? this.meetThePlant()
          : this.searchResults()}
      </View>
    )
  }
}
