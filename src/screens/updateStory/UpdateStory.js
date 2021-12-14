import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextArea from '../../components/TextArea';
import getStories from '../../../mock/getStories.json'

export default function UpdateStory({navigation}) {

  const [story, setStory] = useState(navigation.getParam('item'))
  const [value, setChangeText] = useState("");

  const onTextChange = (text) => {
    setChangeText(text)
  }

  const onPress = () => {
    console.log("story====>", `${story.description} ${value}`)
    console.log("id---->", story.id)
  }

  return (
    <View>
      <Text>{story.title}</Text>
      <Text>{`${story.description} ${value}`}</Text>
      <TextArea onTextChange={onTextChange} value={value} onPress={onPress} />
    </View>
  )
}
