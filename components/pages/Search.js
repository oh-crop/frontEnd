import React, {Component} from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

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
    hasSearched: true,
  };

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
// onPress={() => alert("You have pressed my buttons!")
  meetThePlant = () => (
    <View style={styles.container}>
      <Text>MEET A NEW PLANT!</Text>
      <PlantItem
        title={'Plant1'}
        image={ImagePlaceholder}
        searchNavigation={this.props.navigation}
        />
    </View>
  )

  searchResults = () => (
    <View style={styles.container}>
      <FlatList
        style={styles.searchResultsContainer}
        data={this.state.searchResults}
        renderItem={({item, index, separators}) => (
          <PlantItem
            title={item.title}
            image={ImagePlaceholder}
            searchNavigation={this.props.navigation}
          />
        )}
      />
    </View>
  )

}
