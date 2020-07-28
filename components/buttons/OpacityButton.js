import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

import styles from '../../styles/styles'

export const OpacityButton = ({buttonStyle, pressFunction, text, textStyle}) => {
  return(
    <TouchableOpacity
      style={ buttonStyle }
      onPress={ pressFunction }
      >
      <Text style={ textStyle }>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
