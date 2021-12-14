import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextArea from '../../components/TextArea';
import getStories from '../../../mock/getStories.json'
import InputField from '../../components/InputField';

export default function Dashboard({navigation}) {

  const [description, setDescription] = useState(null);
  const [stories, setStories] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [title, setTitle] = useState(null)

  useEffect(() => {
    getMe()
    getAllStories()
  }, [])

  const getAllStories = async() => {
    setStories(getStories.stories)
  }

  const onTextChange = (text) => {
    setDescription(text)
  }

  const getMe = async() => {
    let me = await AsyncStorage.getItem('authentication');
    me = JSON.parse(me)
    console.log("me- from dashboard--->", me)
  }

  const updateStory = async(item) => {
    navigation.navigate('UpdateStory', {item})
  }

  const onTitleChange = (text) => {
    setTitle(text)
  }

  const onPress = async() => {
    console.log("title---->", title)
    console.log("title---->", description)
  }

  return (
    <View>
      <Text>Title:</Text>
      <InputField onTitleChange={onTitleChange} value={title} />
      <Text>Description:</Text>
      <TextArea onTextChange={onTextChange} value={description} onPress={onPress} />
      <FlatList
        data={stories}
        renderItem={({item}) => <TouchableOpacity onPress={() => updateStory(item)}>
          <Text style={{color: 'black'}}>{item.title}</Text>
          <Text style={{color: 'black'}}>{item.description}</Text>
        </TouchableOpacity>}
      />
    </View>
  )
}
