import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
// import Test from './src/components/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
