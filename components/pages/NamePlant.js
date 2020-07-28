import React, {Component} from 'react';
import { View, Text, SafeAreaView, Input } from 'react-native';

import styles from '../../styles/styles';
import InputBar from '../InputBar';
import api from '../../api/plantAPI';
import { OpacityButton } from '../buttons/OpacityButton'

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
    return (
      <SafeAreaView>
        <View>
          <Text>Give your new crop a name</Text>
          <InputBar
            placeholder={'Enter plant name'}
            buttonText={'Add Plant'}
            setValue={this.setName}
            inputButtonClick={this.addPlant}
            />
            <OpacityButton
              text={ 'Go Back' }
              pressFunction={ () => this.props.navigation.goBack() }
              textStyle={ styles.goBackButton }
              buttonStyle={ styles.buttonContainer }/>
        </View>
      </SafeAreaView>
    )
  }
}
