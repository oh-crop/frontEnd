import React from 'react';
import { View, Text, Image, TextInput, FlatList } from 'react-native';

import styles from '../../styles/styles';

export default function Search() {
  return (
    <View>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchbox} placeholder={'Search'}/>
        </View>
      <FlatList style={styles.searchResultsContainer}>
          <Text style={styles.meetAPlant}>
            Meet A New Plant!
          </Text>
          <Text style={{color: 'black'}}>
            Meet A New Plant!
          </Text>
          <Text style={{color: 'black'}}>
            Meet A New Plant!
          </Text>
          <Text style={{color: 'black'}}>
            Meet A New Plant!
          </Text>
      </FlatList>
    </View>
  );
}
