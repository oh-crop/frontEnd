import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput,   TouchableOpacity,
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

function InputBar (props) {

  return (
    <View style={props.styles}>
      <TextInput
        style={[styles.addNameSearchbox, styles.textDark]}
          placeholder={props.placeholder}
          onChangeText={(text) => props.setValue(text)}/>
      <View style={styles.borderRadius}>

        <TouchableOpacity
          style={[styles.submitBtn, styles.borderRadius]}
          onPress={() => props.inputButtonClick()}>
          <Text style={styles.textLight}>{props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InputBar;
