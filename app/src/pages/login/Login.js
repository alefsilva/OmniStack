import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.wrapContainer}>
      <Image source={Logo} />
      <Text>{/*the react import the 2x, 3x automatically*/}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
  },
});
