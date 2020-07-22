import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/styles';

class PlantInfo extends Component {
  state = {
    test: 'Test String'
  }

  render() {
    return (
      <View>
        <Text>PlantInfo Component</Text>
      </View>
    )
  }
}

export default PlantInfo
