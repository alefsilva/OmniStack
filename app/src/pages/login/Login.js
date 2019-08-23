import React from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.wrapContainer}>
      <Image source={Logo} />
      <Text>
        {/*
         * the react import the 2x, 3x automatically
         * don't have one element form
         */}
      </Text>
      <TextInput
        placeholder="Digite seu usuário no GitHub"
        placeHolderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15 // padding: 0 15px;
  }
});
