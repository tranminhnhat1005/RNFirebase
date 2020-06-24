import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Title,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import global from '../global';
import saveToken from '../api/saveToken';
import getToken from '../api/getToken';

export class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }
  componentDidMount() {
    getToken().then((res) => this.setState({user: res.user}));
  }
  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  onSignOut() {
    this.setState({user: null});
    saveToken('');
    this.removeItemValue('@token');
  }
  render() {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={styles.userInfoHeader}>
                <Avatar.Image
                  source={require('../assets/anonymous_avatar.png')}
                  size={50}
                />
                <View style={styles.userInfoHeaderRight}>
                  <Title style={styles.title}>Tran Minh Nhat</Title>
                  <Caption style={styles.caption}></Caption>
                </View>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <Drawer.Item
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              />
              <Drawer.Item
                icon={({color, size}) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}
              />
              <Drawer.Item
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  this.props.navigation.navigate('Settings');
                }}
              />
              <Drawer.Item
                icon={({color, size}) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {
                  this.props.navigation.navigate('Support');
                }}
              />
            </Drawer.Section>
            {/* <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="auto">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section> */}
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign out"
            onPress={() => this.onSignOut.bind(this)}
          />
        </Drawer.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  userInfoHeader: {
    flexDirection: 'row',
    marginTop: 15,
  },
  userInfoHeaderRight: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
