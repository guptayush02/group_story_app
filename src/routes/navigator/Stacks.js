import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Login from '../../screens/auth/Login';

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

