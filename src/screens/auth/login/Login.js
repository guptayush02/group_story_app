import React, { useState, useEffect } from "react";
import styles from './Login.style';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import * as Facebook from 'expo-facebook';
import { authService } from "../../../services";

export default function Login({ navigation, actions }) {

  const fbLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '4260768277307705',
      });
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"]
      });

      console.log("type------>", type)
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const me = await response.json();
        console.log("me------->", me);
        const body = {
          token,
          name: me.name,
          fb_id: me.id
        }
        await authService.login(body);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        alert(`Facebook Login Error: Cancelled`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: '#fff', fontSize:30, justifyContent:'center', marginVertical:10}}>Login With Facebook</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => fbLogin()}
      >
        <FontAwesome name="facebook-f" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}
