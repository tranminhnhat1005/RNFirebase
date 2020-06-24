import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_SPLASH_BG} from '../../../../styles/colors';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Component</Text>
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
