import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import styles from './App.style';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Index />
    </View>
  );
}
