import React from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'
import ViewLogin from './src/components/ViewLogin'
import ViewTest from './src/components/ViewTest'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={ViewLogin} />
        <Stack.Screen name="Test" component={ViewTest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
  },
})

export default App
