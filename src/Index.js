import React from 'react';
import { authNavigator } from './routes/navigator/Stacks'
import { createAppContainer } from 'react-navigation';

export default function Index() {
  const App = createAppContainer(authNavigator)
  return <App />
}
