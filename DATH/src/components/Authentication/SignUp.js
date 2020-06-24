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
  ScrollView,
  Alert,
} from 'react-native';
import {COLOR_SPLASH_BG} from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import signup from '../../api/signup';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      confirm_password: '',
      check_textUsernameChange: false,
      check_textNameChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
      isValidName: true,
    };
  }
  textUsernameChange = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 30) {
      this.setState({
        username: val,
        check_textUsernameChange: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        username: val,
        check_textUsernameChange: false,
        isValidUser: false,
      });
    }
  };
  textNameChange = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 50) {
      this.setState({
        name: val,
        check_textNameChange: true,
        isValidName: true,
      });
    } else {
      this.setState({
        username: val,
        check_textNameChange: false,
        isValidName: false,
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

  handleConfirmPasswordChange = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 30) {
      this.setState({
        confirm_password: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        confirm_password: val,
        isValidPassword: false,
      });
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  updateConfirmSecureTextEntry = () => {
    this.setState({
      confirm_secureTextEntry: !this.state.confirm_secureTextEntry,
    });
  };

  handleValidName = (name) => {
    if (name.trim().length >= 1 && name.trim().length <= 50) {
      this.setState({
        name: name,
        isValidName: true,
      });
    } else {
      this.setState({
        isValidName: false,
      });
    }
  };
  handleValidUser = (val) => {
    if (val.trim().length >= 8 && val.trim().length <= 20) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };

  goToSignIn() {
    this.props.navigation.navigate('SignInScreen');
  }
  signUpUser = () => {
    const {username, name, password} = this.state;
    signup(username, name, password).then((res) => {
      if (res === 'THANH_CONG') {
        this.onSuccess();
      } else {
        this.onFail();
      }
    });
  };
  removeEmail() {
    this.setState({username: ''});
  }
  onSuccess() {
    Alert.alert(
      'Notice',
      'Sign up successfully',
      [{text: 'OK', onPress: this.goToSignIn()}],
      {
        cancelable: false,
      },
    );
  }
  onFail() {
    Alert.alert(
      'Notice',
      'Username has been used by other',
      [{text: 'OK', onPress: () => this.removeEmail.bind(this)}],
      {
        cancelable: false,
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOR_SPLASH_BG} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
          <View style={styles.header_small}>
            <View style={styles.header_small_up}>
              <Text style={styles.text_header_small}>
                By signng up you agree to our{' '}
              </Text>
              <TouchableOpacity>
                <Text style={[styles.text_header_small, {fontWeight: 'bold'}]}>
                  Terms of service
                </Text>
              </TouchableOpacity>
              <Text style={styles.text_header_small}> and</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.text_header_small, {fontWeight: 'bold'}]}>
                Privacy policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                value={this.state.username}
                style={styles.textInput}
                placeholder="Your Username"
                autoCapitalize="none"
                onChangeText={(val) => this.textUsernameChange(val)}
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
            <Text style={styles.text_footer}>Your name</Text>
            <View style={styles.action}>
              <FontAwesome name="user" color="#05375a" size={20} />
              <TextInput
                // value={this.state.name}
                style={styles.textInput}
                placeholder="Your name"
                autoCapitalize="none"
                // onChangeText={(name) => this.textNameChange(name)}
                onEndEditing={(v) => this.handleValidName(v.nativeEvent.text)}
              />
            </View>
            {this.state.isValidName ? null : (
              <Animatable.View animation="fadeInRight" duration={500}>
                <Text style={styles.errorMsg}>Your name cant empty.</Text>
              </Animatable.View>
            )}
            <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                value={this.state.password}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
                placeholder="Your Password"
                autoCapitalize="none"
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
            <Text style={[styles.text_footer, {marginTop: 15}]}>
              Comfirm Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                secureTextEntry={
                  this.state.confirm_secureTextEntry ? true : false
                }
                style={styles.textInput}
                placeholder="Comfirm Your Password"
                autoCapitalize="none"
                onChangeText={(val) => this.handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={this.updateConfirmSecureTextEntry}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={this.signUpUser.bind(this)}
                style={[styles.signIn, {backgroundColor: COLOR_SPLASH_BG}]}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={[
                  styles.signIn,
                  {
                    borderColor: COLOR_SPLASH_BG,
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
                <Text style={[styles.textSign, {color: COLOR_SPLASH_BG}]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

export default SignUpScreen;

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
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    marginTop: 15,
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  header_small: {
    flex: 1,
  },
  header_small_up: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  text_header_small: {
    color: '#fff',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 5,
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
    marginTop: 10,
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
