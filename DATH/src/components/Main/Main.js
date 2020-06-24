import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Menu} from './Menu';
import Shop from './Shop/Shop';

const Drawer = createDrawerNavigator();

export default class Main extends Component {
  gotoAuthentication() {
    const {navigation} = this.props;
    navigation.navigate('Authentication');
  }
  gotoChangeInfo() {
    const {navigation} = this.props;
    navigation.navigate('ChangeInfo');
  }
  gotoOrderHistory() {
    const {navigation} = this.props;
    navigation.navigate('OrderHistory');
  }
  render() {
    return (
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Shop" component={Shop} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
