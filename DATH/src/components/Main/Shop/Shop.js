import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_LIGHT_GREY,
  COLOR_BLACK,
  COLOR_FACEBOOK,
  COLOR_RED,
  COLOR_SPLASH_BG,
  COLOR_YELLOW,
} from '../../../styles/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';

const Stack = createStackNavigator();

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      dataBanner: [],
      dataCategories: [],
      dataFood: [],
      selectCatg: 0,
    };
  }

  componentDidMount() {
    fetch('https://tutofox.com/foodapp/api.json')
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({
          isLoading: false,
          dataBanner: resJSON.banner,
          dataCategories: resJSON.categories,
          dataFood: resJSON.food,
        });
      });
  }

  openMenu() {
    const {navigation} = this.props;
    navigation.openDrawer();
  }
  render() {
    const {dataBanner} = this.state;
    return (
      <Tab.Navigator
        dataBanner={dataBanner}
        initialRouteName="Home"
        activeColor="#fff">
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarColor: COLOR_SPLASH_BG,
            tabBarIcon: ({color}) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            tabBarBadge: 0,
            tabBarColor: COLOR_YELLOW,
            tabBarIcon: ({color}) => (
              <Icon name="ios-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactStack}
          options={{
            tabBarLabel: 'Contact',
            tabBarColor: COLOR_FACEBOOK,
            tabBarIcon: ({color}) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarLabel: 'Search',
            tabBarColor: COLOR_RED,
            tabBarIcon: ({color}) => (
              <Icon name="ios-search" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_SPLASH_BG,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
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
  </Stack.Navigator>
);

const CartStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_YELLOW,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{
        title: 'Cart',
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
  </Stack.Navigator>
);

const ContactStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_FACEBOOK,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Contact"
      component={Contact}
      options={{
        title: 'Contact',
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
  </Stack.Navigator>
);

const SearchStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLOR_RED,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        title: 'Search',
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
  </Stack.Navigator>
);
