import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView, // for iOS
  Platform,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'; // The default Button come with one default style according with the platform
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from '../../assets/logo.png';

export default function Login(props) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => {
        if(user)
          props.navigation.navigate('Main', { user });
      });
  }, []);

  async function handleLogin() {
    console.log('user', user);
    const response = await api.post('/devs', {
      username: user
    });
    const { _id: id } = response.data;
    console.log('id', id);
    await AsyncStorage.setItem('user', id); // the second parameter must be an object
    props.navigation.navigate('Main', { id });
  }

  return (
    <KeyboardAvoidingView
      style={styles.wrapContainer}
      behavior="padding"
      enabled={Platform.OS == 'ios'}>
      <Image source={Logo} />
      <Text>
        {/*
         * the react import the 2x, 3x automatically
         * don't have one element form
         */}
      </Text>
      <TextInput
        autoCapitalize="none" // for iOS
        autoCorrect={false}
        placeholder="Digite seu usuário no GitHub..."
        placeHolderTextColor="#999"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 15, // padding: 0 15px;
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
