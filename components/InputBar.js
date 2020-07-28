import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/styles';

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
