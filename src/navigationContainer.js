import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import HomeScreen from './homeScreen'
import SideMenu from './sideMenu'

const drawerNavigationOptions = {
  drawerWidth: 300,
  contentComponent: props => <SideMenu />
}

const DrawerContainer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
}, drawerNavigationOptions)

export default class NavigationContainer extends Component {
  render() {
    return (
      <DrawerContainer />
    )
  }
}