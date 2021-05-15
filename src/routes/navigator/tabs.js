import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import CustomTabBarBottom from "../../components/CustomTabBar/CustomTabBar";
import { FontAwesome, Entypo, Ionicons, Fontisto } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation';


// stack navigators
import {
  homeNavigator,
} from "./stacks";

const SECONDARY_NAVIGATION_OPTIONS = {
  headerLeft: () => <BackButtonWithNavigation />,
  headerStyle: { height: 30 },
  headerTitleStyle: {
    ...HEADER_TITLE_STYLE,
    marginLeft: Platform.OS === "ios" ? 60 : 0,
  },
};

const HEADER_TITLE_STYLE = {
  fontSize: 20,
  alignSelf: "center",
  textAlign: "center",
  flex: 1,
};

const tabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: homeNavigator,
      navigationOptions: { title: "Dashboard" },
    },
    ScheduleTab: {
      screen: homeNavigator,
      navigationOptions: { title: "Schedule" },
    },
    ClientsTab: {
      screen: homeNavigator,
      navigationOptions: { title: "Clients" },
    },
    ReportsTab: {
      screen: homeNavigator,
      navigationOptions: { title: "Reports" },
    },
    MoreTab: {
      screen: homeNavigator,
      navigationOptions: { title: "More" },
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case "HomeTab":
            return (
              <>
                <FontAwesome name="dashboard" size={24} color="#8F9BB3" />
                <Text style={{color: '#8F9BB3'}}>Dash</Text>
              </>
            );
          case "ScheduleTab":
            return (
              <>
                <Entypo name="calendar" size={24} color="#8F9BB3" />
                <Text style={{color: '#8F9BB3'}}>Schedule</Text>
              </>
            );
          case "ClientsTab":
            return (
              <>
                <Ionicons name="people" size={24} color="#8F9BB3" />
                <Text style={{color: '#8F9BB3'}}>Clients</Text>
              </>
            );
          case "ReportsTab":
            return (
              <>
                <Fontisto name="pie-chart-1" size={24} color="#8F9BB3" />
                <Text style={{color: '#8F9BB3'}}>Reports</Text>
              </>
            );
          // case 'MoreTab':
          //   return (
          //     <Text>More</Text>
          //   )
          default:
            return <View />;
        }
      },
      tabBarOnPress: ({ defaultHandler, navigation })=> {
        navigation.dispatch(StackActions.reset({
          index: 0,
          key: navigation.state.routeName,
          actions: [NavigationActions.navigate({
            routeName: navigation.state.routes[0].routeName
          })]
        }));
      },
      //initialRouteName: "HomeTab",
      tabBarComponent: (props) => <CustomTabBarBottom {...props} />,
      tabBarOptions: {
        showLabel: false,
        activeTintColor: "black",
        inactiveTintColor: "gray",
        style: {
          height: 55,
          backgroundColor: 'black',
          borderTopColor: "#E5E5E5",
          borderTopWidth: 1
        },
        tabStyle: {
          height: 55,
        },
        labelStyle: {
          fontSize: 10,
          height: 20,
        },
      },
      swipeEnabled: false,
    }),
  }
);

const mainStack = createStackNavigator(
  {
    mainTab: {
      screen: tabNavigator,
    }
  },
  {
    headerMode: "none",
  }
);

export default mainStack;
