import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Button, View, Text } from 'react-native'
import HomePage from './HomePage'
import ReportForm from './IncidentReportForm'

const Tab = createBottomTabNavigator()

const ScreenWithButton = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen with Button</Text>
    <Button
      title="Go to another screen"
      onPress={() => navigation.navigate('AnotherScreen')}
    />
  </View>
)

const AnotherScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Another Screen</Text>
  </View>
)

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ScreenWithButton"
        component={HomePage}
        options={{ tabBarButton: () => null }} // Hide button
      />
      <Tab.Screen name="AnotherScreen" component={ReportForm} />
    </Tab.Navigator>
  )
}

export default App
