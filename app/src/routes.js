import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Login from './pages/login/Login';
import Main from './pages/main/Main';

export default createAppContainer(
  /**
   * createSwitchNavigator: without feedback for the user, without header, tabs, without can go back
   * createStackNavigator: with a header for back, title. It will stack the pages
   */
  createStackNavigator({
    Login,
    Main,
  }),
);
