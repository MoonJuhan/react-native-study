import React from 'react'
import type { Node } from 'react'
import { View } from 'react-native'
import ViewLogin from './src/components/ViewLogin'

const App: () => Node = () => {
  return (
    <View>
      <ViewLogin />
    </View>
  )
}

export default App
