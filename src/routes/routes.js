import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, AsyncStorage } from "react-native";
import { createAppContainer } from "react-navigation";
import { authNavigator } from "./navigator/stacks";
import tabNavigator from "./navigator/tabs";
import Loader from "../components/Loader";
import Connector from "../utils/connector";

class Routes extends React.PureComponent {
  constructor() {
    super();
    this.state = {
        roles : [],
        isLoading: true,
    }
  }
  async componentDidMount() {
    const { actions } = this.props;
    this.setState({isLoading: true});
    try {
      let session = await AsyncStorage.getItem("session");
      if (session) {
        actions.saveMe(session);
        this.setState({isLoading: false});
        actions.authenticate();
      } else {
        this.setState({isLoading: false});
        actions.unauthenticated();
      }
    } catch (err) {
      this.setState({isLoading: false});
      actions.unauthenticated();
    }
  }

  render() {
    const { checked, loggedIn } = this.props;
    const { isLoading } = this.state;
    if (!checked || isLoading) return <Loader />;
    const App = createAppContainer(loggedIn ? tabNavigator : authNavigator);
    return <App />;
  }
}

const ConnectedRoutes = (props) => (
  <Connector>
    {({
      actions,
      state: {
        app: { loggedIn, checked },
      },
    }) => (
      <Routes
        checked={checked}
        loggedIn={loggedIn}
        actions={actions.app}
        {...props}
      />
    )}
  </Connector>
);

Routes.propTypes = {
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
  actions: PropTypes.object,
};

Routes.defaultProps = {
  checked: false,
  loggedIn: false,
  actions: {},
};

export default ConnectedRoutes;

