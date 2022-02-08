/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import 'react-native-gesture-handler';
 import 'react-native-url-polyfill/auto';
 import i18n from './languages/i18n';
 
 AppRegistry.registerComponent(appName, () => App);
 