import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FirebaseWrapper } from './db/firebase'
import { firebaseConfig } from './db/config'
import AppNavigator from './navigation/AppNavigator'

export default function App() {
  FirebaseWrapper.GetInstance().Initialize(firebaseConfig)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
