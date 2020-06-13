import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {
  COLOR_SPLASH_BG,
  COLOR_YELLOW,
  COLOR_RED,
  COLOR_FACEBOOK,
} from '../styles/colors';

import HomeScreen from './homeScreen/index.js';
import CartScreen from './cartScreen/index.js';
import SettingScreen from './settingScreen/index.js';
import ProfileScreen from './proflieScreen/index.js';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const CartSrack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: COLOR_SPLASH_BG,
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartStackScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarColor: COLOR_RED,
        tabBarIcon: ({color}) => (
          <Icon name="ios-cart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: COLOR_FACEBOOK,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Setiings',
        tabBarColor: COLOR_YELLOW,
        tabBarIcon: ({color}) => (
          <Icon name="ios-settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_SPLASH_BG,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Menu',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLOR_SPLASH_BG}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const CartStackScreen = ({navigation}) => (
  <CartSrack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_RED,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <CartSrack.Screen
      name="Detail"
      component={CartScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLOR_RED}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </CartSrack.Navigator>
);
