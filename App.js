import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import styles from './App.style';
import { Provider } from "react-redux";
import store from './src/redux/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Index />
    </Provider>
  );
}
