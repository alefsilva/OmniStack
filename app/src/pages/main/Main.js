import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/logo.png';

export default function Main() {
  return (
    <StyledSafeAreaView>
      <Image source={Logo} />
      <CardsContainer>
        <View>
          <Image
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
        </View>
      </CardsContainer>
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
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: papayawhip;
`; // background-color: #f5f5f5

const CardsContainer = styled(View)`
  flex: 1;
  justify-content: center;
  max-height: 500px;
  align-self: stretch;
  background: #333;
`;

const styles = StyleSheet.create({
  // CardsContainer: {
  //   backgroundColor: '#333',
  //   alignSelf: 'stretch', // this property was not working with styled-components =/
  // }
});
