import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_YELLOW} from '../../../../styles/colors';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contact Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
