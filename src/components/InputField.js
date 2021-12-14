import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function InputField({onTitleChange, value}) {

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
          onChangeText={(text) => onTitleChange(text)}
          value={value}
        />
      </View>
      {/* <View style={{height: 10}} />
      <Button
        onPress={() => console.log("press submit")}
        title="SUbmit"
        color="#066CD2"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  )
}
