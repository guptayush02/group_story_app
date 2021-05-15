import Axios from "axios";
import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { Login } from "../../screens/auth";

import { withNavigation } from "react-navigation";
import { FontAwesome, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
// import { images } from "../../styles";

const HEADER_TITLE_STYLE = {
  fontSize: 20,
  alignSelf: "center",
  flex: 1,
};

const PRIMARY_NAVIGATION_OPTIONS = {
  headerLeft: () => null,
  headerStyle: {height: 80, backgroundColor: '#000000', borderBottomWidth: 2},
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE
  },
}

const PRIMARY_NAVIGATION_OPTIONS_AFTER_LOGIN = {
  headerLeft: () => null,
  headerStyle: {height: 80, backgroundColor: '#000000', borderBottomWidth: 2},
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE
  },
  headerRight: () => <RightIcons />
}

const SECONDRY_NAVIGATION_OPTIONS_AFTER_LOGIN = {
  headerLeft: () => <BackButtonWithNavigation />,
  headerStyle: {height: 80, backgroundColor: '#000000', borderBottomWidth: 2},
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE
  },
  headerRight: () => <SecondryHeaderRightIcons type={"primary"} />
}

const THIRD_NAVIGATION_OPTIONS_AFTER_LOGIN = {
  headerLeft: () => <BackButtonWithNavigation />,
  headerStyle: {height: 80, backgroundColor: '#000000', borderBottomWidth: 2},
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE
  },
  headerRight: () => <SecondryHeaderRightIcons type={"secoundry"} />
}

const CLIENT_SECONDRY_NAVIGATION_OPTIONS = {
  headerLeft: () => null,
  headerStyle: {height: 80, backgroundColor: '#000000', borderBottomWidth: 2},
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE
  },
  headerRight: () => <SecondryHeaderRightIcons type={"primary"} />
}

function secondryHeaderRightIcons({ navigation, type }) {
  if (type === "primary") {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(navigation.getParam('navigationScreen'))}>
        <AntDesign
          name="plus"
          size={24}
          color="#8F9BB3"
          style={{ padding: 10, marginTop: 15}}
        />
      </TouchableOpacity>
    )
  } else {
    return null;
  }
}

const SecondryHeaderRightIcons = withNavigation(secondryHeaderRightIcons);

function rightIcons({ navigation }) {
  return (
    <View style={{flexDirection: 'row', marginRight: 20, marginTop: 12}}>
      {/* <FontAwesome name="user" size={24} style={{marginRight: 15}} color="#8F9BB3" /> */}
      <Feather name="shopping-cart" size={24} color="#8F9BB3" />
    </View>
  )
}

const RightIcons = withNavigation(rightIcons);

function backbutton({ navigation }) {
  return (
    <>
      <MaterialIcons
        name="arrow-back"
        color="white"
        size={24}
        style={{ padding: 10, marginTop: 15}}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </>
  );
}

const BackButtonWithNavigation = withNavigation(backbutton);

const renderHeaderTitle = (title) => {
  return (
    <View style={{flex: 1, alignItems: "center"}}>
      {/* <View style={styles.headerWhiteBox} /> */}
      {/* <Image source={images.COlogoblk} style={{alignSelf: 'center', height: 30, width: 150, marginTop: 7}} /> */}
      <View style={{height: 5}} />
      <Text style={{color: "#fff", fontSize: 18, marginBottom: 30, marginLeft: 0, fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}

export const authNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: renderHeaderTitle(null),
        // ...PRIMARY_NAVIGATION_OPTIONS
      }),
    },
  },
  {
    initialRouteName: "Login",
  }
);

export const homeNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: renderHeaderTitle("Sign In"),
        ...PRIMARY_NAVIGATION_OPTIONS
      }),
    },
  },
  {
    initialRouteName: "Login",
  }
);