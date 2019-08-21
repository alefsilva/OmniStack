/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/*css inline {flex: 1, backgroundColor: '#7159c1'}*/}
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}>Hello World2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    flexDirection: 'row', // by default, the flexDirection is column. Then, the justifyContent and alignItems are opposite
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },
})
