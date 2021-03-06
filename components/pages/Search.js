import React, {Component} from 'react';
import { View, Text, FlatList, SafeAreaView, ImageBackground } from 'react-native';

import PlantItem from '../PlantItem';
import InputBar from '../InputBar';
import styles from '../../styles/styles';
import api from '../../api/plantAPI';
import LoadingPage from '../Loading';
import backgroundImg from '../../assets/search-background.jpg';

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
      <SafeAreaView style={styles.container}>

        <InputBar
          styles={[styles.searchInputContainer]}
          setValue={this.setQuery}
          inputButtonClick={this.gatherQuery}
          placeholder={'Search'}
          buttonText={'Search'}/>

        { !this.state.hasSearched
          ? this.meetThePlant()
          : this.searchResults() }
      </SafeAreaView>
    );
  };

  // </ImageBackground>
  renderLoader = () => {
    if (!this.state.searchResults.length && this.state.hasSearched) {
      return <LoadingPage />
    } else if (!this.state.randomPlant) {
      return <LoadingPage />
    }
  }

  // this method will render to the page if the 'hasSearched' toggle is set to false
  meetThePlant = () => (

    <ImageBackground
      source={backgroundImg}
      style={[styles.greenCropBackground,]}>

      <View style={styles.searchResultsContainer}>

        <Text style={styles.subHeader}>
          MEET A NEW PLANT!
        </Text>
        <PlantItem
          title={this.state.randomPlant.plant_type}
          image={this.state.randomPlant.plant_image}
          id={this.state.randomPlant.id}
          navigation={this.props.navigation}/>
        </View>
      </ImageBackground>
  );

  searchResults = () => (
    <View style={styles.searchResultsContainer}>
      <ImageBackground
        source={backgroundImg}
        style={[styles.greenCropBackground, styles.searchBackground]}>
      <FlatList
        data={this.state.searchResults}
        keyExtractor={item => `${item.id}`}
        renderItem={this.renderPlantItem} />
      </ImageBackground>
    </View>
  )

  renderPlantItem = ({ item }) => (
    <PlantItem
      title={item.plant_type}
      image={item.plant_image}
      id={item.id}
      navigation={this.props.navigation}/>
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
