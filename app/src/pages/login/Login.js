import React from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.wrapContainer}>
      <Image source={Logo} />
      <Text>{/*
            * the react import the 2x, 3x automatically
            * don't have one element form
    */}</Text>
      <TextInput placeholder="Digie seu usuário no GitHub" />
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
