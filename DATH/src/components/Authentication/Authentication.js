import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {COLOR_RED} from '../../styles/colors';
// StatusBar.setHidden(true);

export default class Authentication extends Component {
  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goBack.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
