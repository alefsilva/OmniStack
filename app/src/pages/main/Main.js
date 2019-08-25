import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView>
      <Image source={Logo} />
    </SafeAreaView>
  );
}
