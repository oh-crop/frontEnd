import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

const InputBar = (props) => {

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        style={[styles.searchbox, styles.textDark]}
          placeholder={props.placeholder}
          onChangeText={(text) => props.setValue(text)}
      />
      <View style={styles.borderRadius}>
        <Button
          title={props.buttonText}
          onPress={() => props.inputButtonClick()}
        />
      </View>
    </View>
  )
}

export default InputBar;
