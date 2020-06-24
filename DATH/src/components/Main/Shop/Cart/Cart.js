/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Header} from 'react-native';
import {COLOR_YELLOW} from '../../../../styles/colors';
// import Icon from 'react-native-vector-icons/Ionicons';

export default class Cart extends Component {
  openMenu() {
    const {navigation} = this.props;
    navigation.openDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
