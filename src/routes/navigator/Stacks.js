import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { Login } from '../../screens/auth';
import { Dashboard } from '../../screens/home';

export const authNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      }),
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export const homeNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
        title: 'Home'
      }),
    }
  },
  {
    initialRouteName: 'Dashboard',
  }
)

