import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/logo.png';

export default function Main() {
  return (
    <StyledSafeAreaView>
      <Image source={Logo} />
      <CardsContainer>
        <Card>
          <Avatar
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <Footer>
            <Text>Diego Fernandes</Text>
            <Text>
              CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React
              Native, NodeJS e todo ecossistema em torno dessas tecnologias.
            </Text>
          </Footer>
        </Card>

        <Card>
          <Avatar
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <Footer>
            <Text>Diego Fernandes</Text>
            <Text>
              CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React
              Native, NodeJS e todo ecossistema em torno dessas tecnologias.
            </Text>
          </Footer>
        </Card>

        <Card>
          <Avatar
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <Footer>
            <Text>Diego Fernandes</Text>
            <Text>
              CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React
              Native, NodeJS e todo ecossistema em torno dessas tecnologias.
            </Text>
          </Footer>
        </Card>
      </CardsContainer>
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
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
  background: #333;
`;

const Card = styled(View)`
  border: 1px solid #ddd;
  margin: 30px;
  overflow: hidden;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Avatar = styled(Image)`
  flex: 1;
  height: 300;
`;

const Footer = styled(View)`
  background-color: #fff;
  padding: 15px 20px;
`;

const styles = StyleSheet.create({
  // CardsContainer: {
  //   backgroundColor: '#333',
  //   alignSelf: 'stretch', // this property was not working with styled-components =/
  // }
});
