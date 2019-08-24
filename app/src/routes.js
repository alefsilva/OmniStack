import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Login from './pages/login/Login';
import Main from './pages/main/Main';

export default createAppContainer(
  /**
   * createSwitchNavigator: without feedback for the user, without header, tabs, without can go back
   * createStackNavigator: with a header for back, title. It will stack the pages
   * createBottomTabNavigator: create navigation by tabs on bottom
   * createMaterialTopTabNavigator: create navigation by tabs on top
   * createDrawerNavigator: create a sidebar navigation
   */
  createSwitchNavigator({
    Login,
    Main,
  }),
);
