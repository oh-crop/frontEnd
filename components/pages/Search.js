import React, {Component} from 'react';
import { View, Text, FlatList, SafeAreaView, Scrollview } from 'react-native';


import PlantItem from '../PlantItem';
import ImagePlaceholder from '../../assets/meet-a-plant-example.jpg';
import SearchBar from '../SearchBar';
import styles from '../../styles/styles';
import api from '../../api/plantAPI'

export default class Search extends Component {

  state = {
    searchResults: [],
    randomPlant: {},
    hasSearched: true,
  };

  componentDidMount() {
    this.gatherInfo('tomato')
  }

  render () {
    return (
      <SafeAreaView>
        <SearchBar />
        { !this.state.hasSearched
          ? this.meetThePlant()
          : this.searchResults()}
      </SafeAreaView>
    );
  };

  // this method will render to the page if the 'hasSearched' toggle is set to false
  meetThePlant = () => (
    <View style={styles.container}>
      <Text>
        MEET A NEW PLANT!
      </Text>
      <PlantItem
        title={this.state.randomPlant.plant_type}
        image={this.state.randomPlant.plant_image}
        searchNavigation={this.props.navigation}
        tabNavigation={this.props.navigation}/>
    </View>
  );

  searchResults = () => (
    <FlatList
      style={styles.searchResultsContainer}
      data={this.state.searchResults}
      keyExtractor={item => `${item.id}`}
      renderItem={this.renderPlantItem}
    />
  )

  renderPlantItem = ({ item }) => (
    <PlantItem
      title={item.plant_type}
      image={item.plant_image}
      searchNavigation={this.props.navigation}
      tabNavigation={this.props.navigation}
    />
  )

  // this method will render to the page if the 'hasSearched' toggle is set to false

  //We should call this before return in the render to populate the info we need
  gatherInfo = (query) => {
    if (this.state.hasSearched) {
      //this argument needs to be made dynamic by what is coming through the search bar.
      this.getSearchResults(query)
    } else {
      this.getRandomPlant()
    }
  }

  // axios call that gets a random plant... Should be abstracted from here     ....This is old now, the way I did it before abstraction....
  getRandomPlant = () => {
    api.getRandomPlant()
    .then(response => {
      this.setState({ randomPlant: response.data, hasSearched: false } )
    })
    .catch(err => {
      console.log(err)
    })
  }

  // axios call that will get search results when those are available... Should also be abstracted from here.
  getSearchResults = (query) => {
    api.getPlantsBySearch(query)
    .then(response => {
      this.setState({ searchResults: [...response.data], hasSearched: true})
    })
    .catch(err => {
      console.log(err)
    })
  }
}
