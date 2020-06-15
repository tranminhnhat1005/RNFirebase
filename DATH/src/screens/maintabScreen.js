import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import {
  COLOR_SPLASH_BG,
  COLOR_YELLOW,
  COLOR_RED,
  COLOR_FACEBOOK,
} from '../styles/colors';

import HomeScreen from './homeScreen/index.js';
import CartScreen from './cartScreen/index.js';
import SettingScreen from './settingScreen/index.js';
import ContactScreen from './contactScreen/index.js';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const CartSrack = createStackNavigator();
const Settingstack = createStackNavigator();
const ContactStack = createStackNavigator();

class MainTabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }

  getDada = () => {
    AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart);
          this.setState({dataCart: cartfood});
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err);
      });
  };

  componentDidMount() {
    this.getDada();
  }

  componentDidUpdate() {
    this.getDada();
  }
  render() {
    return (
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
            tabBarBadge: this.state.dataCart.length,
            tabBarColor: COLOR_RED,
            tabBarIcon: ({color}) => (
              <Icon name="ios-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactStackScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarColor: COLOR_FACEBOOK,
            tabBarIcon: ({color}) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreen}
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
  }
}

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
const SettingStackScreen = ({navigation}) => (
  <Settingstack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_YELLOW,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Settingstack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLOR_YELLOW}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Settingstack.Navigator>
);

const ContactStackScreen = ({navigation}) => (
  <ContactStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_FACEBOOK,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ContactStack.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLOR_FACEBOOK}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ContactStack.Navigator>
);
