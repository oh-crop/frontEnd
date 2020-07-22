import React, {Component} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

const searchIcon = <Ionicons name="md-search" size={40} color="black" />

const SearchBar = () => (
  <View style={styles.searchInputContainer}>
    <TextInput
      style={styles.searchbox}
      placeholder={'Search'}
    />
    <View style={styles.searchButton}>
      <Button
        title='Click to Search'
        />
    </View>
  </View>
)

export default SearchBar;
