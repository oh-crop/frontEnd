import React, {Component} from 'react';
import { View, Text, SafeAreaView, Input, TouchableOpacity } from 'react-native';

import styles from '../../styles/styles';
import InputBar from '../InputBar';
import api from '../../api/plantAPI';

export default class NamePlant extends Component {
  state = {
    name: ''
  }

  setName = (e) => {
    this.setState({name: e.target.value})
  }

  addPlant = () => {
    this.addPlantToGarden(this.props.route.params.id, this.state.name) 
  }

  addPlantToGarden = (id, name) => {
    api.addToMyGarden(id, name)
    .then(response => {})
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View>
        <Text>Give your new crop a name</Text>
        <InputBar 
          placeholder={'Enter plant name'}
          buttonText={'Add Plant'}
          setValue={this.setName}
          inputButtonClick={this.addPlant}
          />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.goBack()}
          }>
          <Text style={styles.goBackButton}>Go Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}