import React from 'react'
import type { Node } from 'react'

import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native'

const ViewLogin = ({ navigation }): Node => {
  const [id, onChangeId] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)

  const onPressLearnMore = () => {
    console.log(`Button ${id} ${password}`)
    navigation.navigate('Test')
  }

  return (
    <SafeAreaView style={styles.viewLogin}>
      <Text>Login Page</Text>
      <TextInput style={styles.input} onChangeText={onChangeId} value={id} />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="useless placeholder"
        value={password}
      />
      <Button
        onPress={onPressLearnMore}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default ViewLogin
