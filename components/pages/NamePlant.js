import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Input,
  TouchableOpacity,
  Image,
  ImageBackground } from 'react-native';

import styles from '../../styles/styles';
import InputBar from '../InputBar';
import api from '../../api/plantAPI';
import { OpacityButton } from '../buttons/OpacityButton'
import backgroundImg from '../../assets/plant_info_background.jpg';

export default class NamePlant extends Component {
  state = {
    name: ''
  }

  setName = (text) => {
    this.setState({name: text})
  }

  addPlant = () => {
    this.addPlantToGarden(this.props.route.params.id, this.state.name)
    this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
    this.props.navigation.navigate('SearchPage')
  }

  addPlantToGarden = (id, name) => {
    api.addToMyGarden(id, name)
    .then(response => {})
    .catch(err => console.log(err))
  }

  render() {
    const plantImg = this.props.route.params.image;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={styles.greenCropBackground}>
        <View style={styles.plantInfoHeader}>
          <Text style={styles.headerText}>Name Your Crop</Text>
        </View>
        <View style={styles.transparentSubHeader}></View>
        <View style={styles.plantImgContainer}>
          <View style={styles.plantImgContainer}>
            <Image
              style={styles.plantImg}
              source={{uri: plantImg}}/>
          </View>
        </View>
        <View style={[styles.addPlantContainer, styles.boxShadow]}>
          <View style={[styles.addNameForm, styles.borderRadius]}>
            <InputBar
              styles={[styles.namePlantInputContainer]}
              placeholder={'Enter plant name'}
              buttonText={'Add Plant'}
              setValue={this.setName}
              inputButtonClick={this.addPlant}/>
          </View>
        </View>
        <OpacityButton
          text={ 'Back to Search' }
          pressFunction={ () => this.props.navigation.goBack() }
          textStyle={ styles.backButton }
          buttonStyle={ styles.backButtonContainer }/>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}
