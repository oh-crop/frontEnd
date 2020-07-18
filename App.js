import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles/styles'
import Landing from './components/pages/Landing'

export default function App() {
  return (
    // <View style={styles.container}>
      <Landing />
    // </View>
  );
}
