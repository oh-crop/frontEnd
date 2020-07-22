import React, {Component} from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, TouchableHighlight  } from 'react-native';

import PlantItem from '../PlantItem';
import ImagePlaceholder from '../../assets/meet-a-plant-example.jpg';
import SearchBar from '../SearchBar';
import styles from '../../styles/styles';

export default class Search extends Component {
  state = {
    searchResults: [
      {
      id: "1",
      title: "First Item",
      },
      {
      id: "2",
      title: "Second Item",
      },
      {
      id: "3",
      title: "Third Item",
      },
    ],
    hasSearched: false,
  };

  meetThePlant = () => (
    <View style={{alignSelf: 'center', textAlign: 'center'}}>
      <Text>MEET A NEW PLANT!</Text>
      <PlantItem
        title={'Plant1'}
        image={ImagePlaceholder}
      />
    </View>
  )

  searchResults = () => (
    <View style={{alignSelf: 'center', textAlign: 'center'}}>
      <FlatList
        style={styles.searchResultsContainer}
        data={this.state.searchResults}
        renderItem={({item, index, separators}) => (
          <PlantItem
            title={item.title}
            image={ImagePlaceholder}/>
        )}
      />
    </View>
  )

  render () {
    return (
      <SafeAreaView>
        <SearchBar />
        {!this.state.hasSearched
          ? this.meetThePlant()
          : this.searchResults()}
      </SafeAreaView>
    )
  }
}
