import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from './HomePage'
import ReportForm from './IncidentReportForm'
import CameraFile from './CameraFile'
import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const AnotherScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {/* <Text>Another Screen</Text> */}
  </View>
)

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'HomePage':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'ReportForm':
              iconName = focused ? 'document' : 'document-outline'
              break
            case 'TakePicture':
              iconName = focused ? 'camera' : 'camera-outline'
              break
            case 'AnotherScreen':
              iconName = focused
                ? 'ellipsis-horizontal'
                : 'ellipsis-horizontal-outline'
              break
            default:
              iconName = 'help-circle'
              break
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="ReportForm" component={ReportForm} />
      <Tab.Screen name="TakePicture" component={CameraFile} />
      <Tab.Screen name="AnotherScreen" component={AnotherScreen} />
    </Tab.Navigator>
  )
}

export default App
