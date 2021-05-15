import React, { Component } from 'react';
import { ActivityIndicator, View } from "react-native";
import PropTypes from 'prop-types'

export default function Loader({ isLoading, size, color }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

Loader.defaultProps = {
  size: 'large',
  color: 'black'
}
