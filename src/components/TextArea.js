import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function TextArea({onTextChange, value, onPress}) {

  return (
    <View>
      <View>
        <TextInput
          style={{
            width: '90%',
            borderColor: 'gray',
            borderWidth: 1,
            padding: 0,
          }}
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => onTextChange(text)}
          value={value}
        />
      </View>
      <View style={{height: 10}} />
      <Button
        onPress={() => onPress()}
        title="SUbmit"
        color="#066CD2"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}
