import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authenticate, unauthenticated, saveMe} from '../../redux/taskAction.js'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.loggedIn);

  useEffect(() => {
    checkMe()
  }, [])

  const checkMe = async() => {
    const me = await AsyncStorage.getItem('authentication')
    console.log("me check---->", me)
    return
  }

  const logIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '595714558361612',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        let response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);
        response = await response.json()
        const me = {
          fb: {...response, token}
        }
        dispatch(saveMe(me))
        dispatch(authenticate())
        AsyncStorage.setItem('authentication', JSON.stringify(me))
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <View>
      <Text>Open Login.js and start code</Text>
      <View style={{width: 200, alignSelf: 'center', margin: 100}}>
        <Button
          onPress={logIn}
          title="Facebook login"
          color="#066CD2"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  )
}
