import React, {Component} from 'react';
import { View, Text, FlatList, SafeAreaView, Scrollview } from 'react-native';


import PlantItem from '../PlantItem';
import ImagePlaceholder from '../../assets/meet-a-plant-example.jpg';
import InputBar from '../InputBar';
import styles from '../../styles/styles';
import api from '../../api/plantAPI'

export default class Search extends Component {

  state = {
    searchResults: [],
    randomPlant: {},
    hasSearched: false,
    query: ''
  };

  componentDidMount() {
    this.gatherInfo()
  }

  setQuery = (text) => {
    this.setState({query: text})
  }

  gatherQuery = async () => {
    await this.setState({hasSearched: true})
    await this.gatherInfo(this.state.query)
  }

  render () {
    return (
      <SafeAreaView>
        <InputBar 
          setValue={this.setQuery}
          inputButtonClick={this.gatherQuery}
          placeholder={'Search'}
          buttonText={'Click to Search'}/>
        { !this.state.hasSearched
          ? this.meetThePlant()
          : this.searchResults()}
      </SafeAreaView>
    );
  };

  meetThePlant = () => (
    <View style={styles.container}>
      <Text>
        MEET A NEW PLANT!
      </Text>
      <PlantItem
        title={this.state.randomPlant.plant_type}
        image={this.state.randomPlant.plant_image}
        id={this.state.randomPlant.id}
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
      id={item.id}
      searchNavigation={this.props.navigation}
      tabNavigation={this.props.navigation}
    />
  )

  gatherInfo = (query) => {
    if (this.state.hasSearched) {
      this.getSearchResults(query)
    } else {
      this.getRandomPlant()
    }
  }

  getRandomPlant = () => {
    api.getRandomPlant()
    .then(response => {
      this.setState({ randomPlant: response.data} )
    })
    .catch(err => {
      console.log(err)
    })
  }

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
