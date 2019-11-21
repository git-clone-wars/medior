import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Scanner} from './client/components'

export default function App() {
  return (
    <View style={styles.container}>
      <Scanner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
