import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import { Root } from "native-base";
import { Provider } from "react-redux";
import Router from "./routes";
import { MenuProvider } from "react-native-popup-menu";
import store from "./utils/store";

export default function App() {
  return (
    <Root>
      <Provider store={store}>
        <MenuProvider>
        <View style={styles.statusBar}>
          <StatusBar
            barStyle="dark-content"
          />
        </View>
        <View style={styles.appBar} />
        <Router />
        </MenuProvider>
      </Provider>
      </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 35 : 0
  },
  appBar: {
    height: Platform.OS === 'ios' ? 8 : 0,
  },
});
