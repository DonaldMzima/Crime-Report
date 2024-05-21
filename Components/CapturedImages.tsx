import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const windowWidth = Dimensions.get('window').width

export default function CapturedImages() {
  const [imageURIs, setImageURIs] = useState([])

  useEffect(() => {
    const getStoredImages = async () => {
      try {
        const storedURIs = await AsyncStorage.getItem('capturedImages')
        if (storedURIs !== null) {
          setImageURIs(JSON.parse(storedURIs))
        }
      } catch (error) {
        console.log('Error retrieving images:', error)
      }
    }
    getStoredImages()
  }, [])

  const handleReportPress = (uri: string) => {
    console.log('Report pressed for image:', uri)
    // Add your reporting logic here
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imageURIs.length === 0 ? (
        <Text>No images captured yet</Text>
      ) : (
        <View style={styles.imagesContainer}>
          {imageURIs.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri }} style={styles.image} />
              <TouchableOpacity
                style={styles.reportButton}
                onPress={() => handleReportPress(uri)}
              >
                <Text style={styles.reportButtonText}>Report</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: windowWidth - 20,
  },
  imageContainer: {
    marginVertical: 10,
    width: '49%', // Adjust the width to fit two images in a row
    position: 'relative', // Required for positioning the button
  },
  image: {
    width: '100%', // Take full width of the container
    height: 200,
    borderRadius: 10,
  },
  reportButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  reportButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
