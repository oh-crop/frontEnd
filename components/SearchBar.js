import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const searchInput = (event) => {
    setQuery( event.target.value)
  }

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        style={styles.searchbox}
          placeholder={'Search'}
          onChange={() => searchInput(event)}
      />
      <View style={styles.searchButton}>
        <Button
          title='Click to Search'
          onPress={() => alert("I'm the search button!")}
        />
      </View>
    </View>
  )
}

export default SearchBar;
