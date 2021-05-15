import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  AsyncStorage
} from "react-native";
import { ThemeColors } from "react-navigation";
import { BottomTabBar } from "react-navigation-tabs";
import PropTypes from "prop-types";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Connector from "../../utils/connector";
import { Feather } from '@expo/vector-icons';
import styles from './CustomTabBar.style';

const HiddenView = () => <View style={{ display: "none" }} />;

const TouchableWithoutFeedbackWrapper = ({
  onPress,
  onLongPress,
  testID,
  accessibilityLabel,
  ...props
}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    onLongPress={onLongPress}
    testID={testID}
    hitSlop={{ left: 15, right: 15, top: 5, bottom: 5 }}
    accessibilityLabel={accessibilityLabel}
  >
    <View {...props} />
  </TouchableWithoutFeedback>
);

const MoreTab = () => (
  <View style={{marginTop: 0}}>
    <Image
      source={images.COiconbasic500}
      style={{ width: 32, height: 32 }}
    />
    <Text style={{color: '#8F9BB3'}}>More</Text>
  </View>
);

const AppMenu = (props) => {
  const handleLogout = async () => {
    const { actions, navigation } = props;
    console.log("logout---->")
    // actions.unauthenticated();
    // Axios.defaults.headers.common["Authorization"] = "Bearer no-token";
    // AsyncStorage.removeItem("me");
    
    // await authService.logout();
    // actions.unauthenticated();
    // Axios.defaults.headers.common["Authorization"] = "Bearer no-token";
  };

  const { children, navigation } = props;
  const menuOptions = ["", "", "", "", "LOG OUT"];
  const handlers = {
    [""]: () => console.log("dummy link"),
    [""]: () => console.log("dummy link"),//navigation.navigate("AppInfo"),
    [""]: () => console.log("dummy link"),//navigation.navigate("Locations"),
    [""]: () => console.log("dummy link"),//navigation.navigate("Instructor"), //navigation.navigate(')
    ["LOG OUT"]: handleLogout,
  };

  return (
    <Menu style={styles.menuTab}>
      <MenuTrigger>{children}</MenuTrigger>
      <MenuOptions style={styles.menuContainer}>
        {menuOptions.map((menuOption) => (
          <MenuOption
            style={styles.menuOption}
            onSelect={handlers[menuOption]}
            key={menuOption}
          >
            {/* <Image
              style={styles.menuImage}
              source={icons[menuOption.split(" ").join("").toLowerCase()]}
              resizeMode="contain"
            /> */}
            <Text style={styles.menuText}>{menuOption}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

const AppMenuContainer = (props) => (
  <Connector>
    {({ actions }) => <AppMenu actions={actions.app} {...props} />}
  </Connector>
);

const CustomTabBarBottom = (props) => (
  <View style={styles.tabContainer}>
    <View style={{ flex: 4 }}>
      <BottomTabBar
        {...props}
        getButtonComponent={({ route }) => {
          if (route.key === "MoreTab" && !props.showNewTab) {
            return HiddenView;
          }
          return TouchableWithoutFeedbackWrapper;
        }}
      />
    </View>
    <AppMenuContainer {...props}>
      <MoreTab />
    </AppMenuContainer>
  </View>
);

AppMenu.propTypes = {
  actions: PropTypes.object,
};

AppMenu.defaultProps = {
  actions: {},
};

export default CustomTabBarBottom;
