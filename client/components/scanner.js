import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, AppRegistry } from 'react-native'
import {BarCodeScanner } from 'expo'
import * as Permissions from 'expo-permissions'
import * as Constants from 'expo-constants'

export default class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  }

  componentDidMount(){
    this.requestCameraPermission()
  }

  requestCameraPermission = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted'
    })
  }

  handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    )
  }

  render(){
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
        <Text>Requesting for camera permission</Text> :
        this.state.hasCameraPermission === false ?
        <Text>Camera permission is not granted</Text> :
        <BarCodeScanner onBarCodeRead={this.handleBarCodeRead} style={{height:200, width:200}}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
})

AppRegistry.registerComponent(Scanner, () => Scanner);

