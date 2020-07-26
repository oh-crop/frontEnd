import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

import styles from '../styles/styles';

export default function Loading() {
  return (
    <View style={[styles.loadingContainer, styles.horizontal]}>
      <ActivityIndicator size='large' color='#07407b' />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}
