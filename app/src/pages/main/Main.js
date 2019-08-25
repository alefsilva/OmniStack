import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';

export default function Main(props) {
  const routeId = props.navigation.getParam('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function loadUsers() {
      console.log('routeId', routeId);
      const response = await api.get('/devs', {
        headers: {
          user_id: routeId,
        },
      });
      console.log('response.data', response.data);
      setUsers(response.data);
    })(); // it will execute this function automatically

    //loadUsers();
  }, [routeId]); // if the second parameter was [], the useEffect will be run once

  async function handleLike() {
    console.log('users', users);
    const [user, ...rest] = users.reverse(); // the samething as user = users[0]; and the second params get the rest of the items
    console.log('like', user._id);

    await api.post(`devs/${user._id}/likes`, null, {
      headers: {
        user_id: routeId,
      },
    });
    setUsers(rest); // the samething as users.filter(user => user._id != id)
    console.log('users after', users);
  }

  async function handleDislike() {
    const [{_id: id}, ...rest] = users.reverse();

    console.log('dislike', id);
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user_id: routeId,
      },
    }); // the second param of the method post is the body

    /**
     * I can't change the useState users directly... users.push, users = []... no!
     * Use the setUsers instead.
     * */
    setUsers(rest);
    console.log('users after', users);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  }

  return (
    <StyledSafeAreaView>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CardsContainer>
        {users.length == 0 ? (
          <EmptyText>Acabou :(</EmptyText>
        ) : (
          users.map((user, index) => (
            <Card key={user._id} style={[styles.Card, users.length - index]}>
              <Avatar
                source={{
                  uri: user.avatar,
                }}
              />
              <Footer>
                <Name>{user.name}</Name>
                <Bio numberOfLines={3}>{user.bio}</Bio>
              </Footer>
            </Card>
          ))
        )}
      </CardsContainer>
      {users.length > 0 && (
        <ButtonsContainer>
          <StyledTouchableOpacity onPress={handleDislike}>
            <Image source={dislike} />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={handleLike}>
            <Image source={like} />
          </StyledTouchableOpacity>
        </ButtonsContainer>
      )}
    </StyledSafeAreaView>
  ); // className="bio" with styled components no work on react-native
}
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

const Logo = styled(Image)`
  margin-top: 30;
`;

const CardsContainer = styled(View)`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
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

// const StyledText = styled(Text)`
// `;

const Footer = styled(View)`
  background-color: #fff;
  padding: 15px 20px;
`;

/**
 * ${StyledText} {
    font-weight: bold;
  } don't work
 */

const Name = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

const Bio = styled(Text)`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

const EmptyText = styled(Text)`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

const ButtonsContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 30px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 2;
  shadow-offset: {width: 0, height: 2};
`; // box-shadow: 10px 5px 5px black; don't works

const styles = StyleSheet.create({
  Card: {},
  // CardsContainer: {
  //   backgroundColor: '#333',
  //   alignSelf: 'stretch', // this property was not working with styled-components =/
  // }
  // Button: {
  //   elevation: 2, // shadow for android
  //   shadowColor: '#000',

  //   // shadow for ios like bellow
  //   shadowOpacity: 0.05,
  //   shadowRadius: 2,
  //   shadowOffset: {
  //     width: 0, // horizontally
  //     height: 2, // vertically
  //   }
  // }
});
