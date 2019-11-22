import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FirebaseWrapper } from './server/db/firebase';
import { firebaseConfig } from './server/db/config'

export default function App() {

  FirebaseWrapper.GetInstance().Initialize(firebaseConfig)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
