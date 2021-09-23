import React, { useState, useEffect } from 'react';
import { authNavigator, homeNavigator } from './routes/navigator/Stacks'
import { createAppContainer } from 'react-navigation';
import {authenticate, unauthenticated, saveMe} from './redux/taskAction.js'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.loggedIn);

  const [isLoggined, setIsLoggined] = useState(selector);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const me = await AsyncStorage.getItem('me');
      if (!!me) {
        dispatch(authenticate())
        dispatch(saveMe())
        setIsLoggined(selector)
        return;
      }
      dispatch(unauthenticated());
      setIsLoggined(selector);
      return;
    } catch (err) {
      // will add toast according to project requirements
      console.log("err-->", err);
      return;
    }
  }

  const App = createAppContainer(!isLoggined ? authNavigator : homeNavigator)
  return <App />
}
