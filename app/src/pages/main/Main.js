import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/logo.png';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: papayawhip;
`; // background-color: #f5f5f5

export default function Main() {
  return (
    <StyledSafeAreaView>
      <Image source={Logo} />
      <View>
        <View>
          <Image
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
        </View>
      </View>
      <View>
        <Text>Diego Fernandes</Text>
        <Text>
          CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native,
          NodeJS e todo ecossistema em torno dessas tecnologias.
        </Text>
      </View>
      <View />
    </StyledSafeAreaView>
  );
}
