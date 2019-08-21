import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.wrapContainer}>
      <Image source={Logo} /> {/*the react import the 2x, 3x automatically*/}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapContainer: {},
});
