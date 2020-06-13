import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import test from './src/screens/index';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
