import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
import {COLOR_SPLASH_BG} from '../../styles/colors';

export function Menu(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfoHeader}>
              <Avatar.Image
                source={require('../../assets/anonymous_avatar.png')}
                size={50}
              />
              <View style={styles.userInfoHeaderRight}>
                <Title style={styles.title}>Trần Minh Nhật</Title>
                <Caption style={styles.caption}>@parksoongnak</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            {/* <Drawer.Item
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Authentication"
                onPress={this.gotoAuthentication}
              /> */}
            <Drawer.Item
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Authentication');
              }}
            />
            <Drawer.Item
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Change"
              onPress={() => {
                props.navigation.navigate('ChangeInfo');
              }}
            />
            <Drawer.Item
              icon={({color, size}) => (
                <Icon name="clock-outline" color={color} size={size} />
              )}
              label="Order History"
              onPress={() => {
                props.navigation.navigate('OrderHistory');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign out"
        />
      </Drawer.Section>
    </View>
  );
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

// const gotoAuthentication = () => {
//   const {navigation} = this.props;
//   navigation.navigate('Authentication');
// }
// gotoChangeInfo() {
//   const {navigation} = this.props;
//   navigation.navigate('ChangeInfo');
// }
// gotoOrderHistory() {
//   const {navigation} = this.props;
//   navigation.navigate('OrderHistory');
// }
