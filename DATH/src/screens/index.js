/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLOR_BLACK, COLOR_RED} from '../styles/colors.js';

var {width} = Dimensions.get('window');

// import Components
import HomeScreen from './homeScreen/index.js';
import CartScreen from './cartScreen/index.js';
import Support from './supportScreen/index.js';
import Profile from './proflieScreen/index.js';
// unable console yellow
console.disableYellowBox = true;
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
      dataCart: [],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.module === 1 ? (
          <HomeScreen />
        ) : this.state.module === 2 ? (
          <CartScreen />
        ) : this.state.module === 3 ? (
          <Support />
        ) : (
          <Profile />
        )}
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({module: 1})}>
            <Icon
              name="md-restaurant"
              size={30}
              color={this.state.module === 1 ? COLOR_RED : COLOR_BLACK}
            />
            <Text>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({module: 2})}>
            <Icon
              name="md-basket"
              size={30}
              color={this.state.module === 2 ? COLOR_RED : COLOR_BLACK}
            />
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({module: 3})}>
            <Icon
              name="md-map"
              size={30}
              color={this.state.module === 3 ? COLOR_RED : COLOR_BLACK}
            />
            <Text>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({module: 4})}>
            <Icon
              name="md-contact"
              size={30}
              color={this.state.module === 4 ? COLOR_RED : COLOR_BLACK}
            />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab: {
    height: 60,
    width: width,
    // backgroundColor: ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'rgba(212, 233, 250, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
