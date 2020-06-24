/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  //   Alert,
} from 'react-native';
import {COLOR_SPLASH_BG} from '../../styles/colors';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import signin from '../../api/singin';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
    };
  }

  textInputChange = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 30) {
      this.setState({
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  handlePasswordChange = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 30) {
      this.setState({
        password: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        isValidPassword: false,
      });
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleValidUser = (val) => {
    if (val.trim().length >= 8) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };

  signInUser() {
    const {username, password} = this.state;
    signin(username, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  gotoMain() {
    const {navigation} = this.props;
    navigation.replace('Main');
  }

  gotoSignUp() {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  }
  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOR_SPLASH_BG} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome !</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Your Username"
              autoCapitalize="none"
              value={username}
              onChangeText={(val) => this.textInputChange(val)}
              onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
            />
            {this.state.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {this.state.isValidUser ? null : (
            <Animatable.View animation="fadeInRight" duration={500}>
              <Text style={styles.errorMsg}>
                Username is too short or too long.
              </Text>
            </Animatable.View>
          )}

          <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              secureTextEntry={this.state.secureTextEntry ? true : false}
              style={styles.textInput}
              placeholder="Your Password"
              autoCapitalize="none"
              value={password}
              onChangeText={(val) => this.handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={this.updateSecureTextEntry}>
              {this.state.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {this.state.isValidPassword ? null : (
            <Animatable.View animation="fadeInRight" duration={500}>
              <Text style={styles.errorMsg}>
                Password is too short or too long.
              </Text>
            </Animatable.View>
          )}

          <TouchableOpacity>
            <Text style={{color: COLOR_SPLASH_BG, marginTop: 10}}>
              Forgot password ?
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={this.gotoMain.bind(this)}
              style={[styles.signIn, {backgroundColor: COLOR_SPLASH_BG}]}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.gotoSignUp.bind(this)}
              style={[
                styles.signIn,
                {
                  borderColor: COLOR_SPLASH_BG,
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text style={[styles.textSign, {color: COLOR_SPLASH_BG}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_SPLASH_BG,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
