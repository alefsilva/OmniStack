import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/logo.png';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: papayawhip;
`;

export default function Main() {
  return (
    <StyledSafeAreaView>
      <Image source={Logo} />
    </StyledSafeAreaView>
  );
}
