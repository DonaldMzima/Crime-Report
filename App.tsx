import { StyleSheet } from 'react-native'

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Nav from './Components/Nav'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
