import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// IMPORT COMPONENTS TO SETUP NAVIGATOR
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import Splash from './Splash/Splash';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';

const Stack = createStackNavigator();
StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={{name: 'Splash'}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
