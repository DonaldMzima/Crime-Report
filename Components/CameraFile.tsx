import React, { useEffect } from 'react'
import { Camera } from 'expo-camera'
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
import { CameraType } from 'expo-camera/build/legacy/Camera.types'
// import CameraFile from './CameraFile'

const windowDimensions = Dimensions.get('window')

export default function CameraFile() {
  const [cameraType, setType] = useState(CameraType.back)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<any>(Camera) // Define cameraRef with type Camera
Camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  if (hasPermission === null) {
    return <View><Text>Checking permissions...</Text></View>;
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Request Permission" onPress={requestPermission} />
      </View>
    );
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
      {/* <Camera style={styles.camera} type={cameraType} ref={cameraRef}> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>capture</Text>
          </TouchableOpacity>
        </View>
      {/* </Camera> */}
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
