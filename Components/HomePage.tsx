import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CameraFile from './CameraFile'
import ReportForm from './IncidentReportForm'

const HomePage = ({ navigation }: any) => {
  const Tab = createBottomTabNavigator()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crime Reporting App</Text>

      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={CameraFile} />
        <Tab.Screen name="Settings" component={ReportForm} />
      </Tab.Navigator> */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Report Crime</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default HomePage
