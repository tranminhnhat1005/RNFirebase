/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {COLOR_SPLASH_BG, COLOR_YELLOW} from '../../styles/colors';

import global from '../../global';

import saveToken from '../../api/saveToken';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getToken()
      .then((token) => checkLogin(token))
      .then((res) => global.onSignIn(res.user))
      .catch((err) => console.log('LOI :', err));
  }
  gotoSignIn() {
    const {navigation} = this.props;
    navigation.replace('SignInScreen');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceInLeft"
            source={require('../../assets/splash_logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
          <Animatable.Text animation="bounceInLeft" style={styles.slogan}>
            STAY AT HOME ♥
          </Animatable.Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={[styles.title]}>Great food from around the world!</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={this.gotoSignIn.bind(this)}>
              <Text style={styles.textSign}>Get Started {'>>'}</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.35;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_SPLASH_BG,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  slogan: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLOR_YELLOW,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    backgroundColor: COLOR_YELLOW,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
