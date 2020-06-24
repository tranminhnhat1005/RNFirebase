/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component} from 'react';
// import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import AsyncStorage from '@react-native-community/async-storage';

import RootStackScreen from './src/screens/rootstackscreen.js';

import {DrawerContent} from './src/screens/drawerScreen';

import MainTabScreen from './src/screens/maintabScreen.js';
import SupportScreen from './src/screens/supportScreen/index.js';

import global from './src/global';
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLogedIn: false,
      userToken: null,
      userName: null,
    };
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(userName) {
    this.setState({userName});
  }

  onSignOut() {
    this.setState({userName: null});
  }
  render() {
    return (
      <NavigationContainer>
        {this.state.userName !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    );
  }
}
