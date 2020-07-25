import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

class SearchBar extends Component {
  
  render () {
    return (
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchbox}
            placeholder={'Search'}
            onChange={() => this.props.setQuery(event)}
        />
        <View style={styles.searchButton}>
          <Button
            title='Click to Search'
            onPress={() => this.props.searchButtonClick(event)}
          />
        </View>
      </View>
    )
  }
}

export default SearchBar;
