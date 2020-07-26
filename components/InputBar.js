import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

class InputBar extends Component {
  
  render () {
    
    return (
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchbox}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.props.setValue(text)}
        />
        <View style={styles.searchButton}>
          <Button
            title={this.props.buttonText}
            onPress={() => this.props.inputButtonClick()}
          />
        </View>
      </View>
    )
  }
}

export default InputBar;
