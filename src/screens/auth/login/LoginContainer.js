import React from 'react';
import Login from './Login';
import Connector from '../../../utils/connector';

const LoginContainer = props => (
  <Connector>
    {
      ({ actions }) => (
        <Login
          actions={actions.app}
          {...props}
        />
      )
    }
  </Connector>
)

export default LoginContainer
