import React, {Component} from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, TouchableHighlight  } from 'react-native';

import styles from '../styles/styles';


const SearchBar = () => (
  <View style={styles.searchInputContainer}>
    <TextInput style={styles.searchbox} placeholder={'Search'}/>
    </View>
)

export default SearchBar;