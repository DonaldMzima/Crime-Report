import React from 'react'
import { Camera, CameraType } from 'expo-camera'
import { useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import CapturedImages from './CapturedImages'
// import CameraFile from './CameraFile'

const windowDimensions = Dimensions.get('window')

export default function CameraFile() {
  const [cameraType, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null) // Define cameraRef with type Camera

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync()
      console.log(uri)
      // Store the image URI using AsyncStorage
      try {
        const storedURIs = await AsyncStorage.getItem('capturedImages')
        let updatedURIs = []
        if (storedURIs !== null) {
          updatedURIs = JSON.parse(storedURIs)
        }
        updatedURIs.push(uri)
        await AsyncStorage.setItem(
          'capturedImages',
          JSON.stringify(updatedURIs),
        )
        console.log('Image stored successfully')
      } catch (error) {
        console.log('Error storing image:', error)
      }
    }
  }

  return (
    <View
      style={[
        styles.container,
        { width: windowDimensions.width, height: windowDimensions.height },
      ]}
    >
      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <CapturedImages />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: windowDimensions.width,
    height: windowDimensions.width, // Set height equal to width to make it square
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 325,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50, // to make it a circle
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
})
