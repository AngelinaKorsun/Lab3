import {AppRegistry} from 'react-native';
import React from 'react';
import Navigator from 'react-native-easy-router';
import Lab31 from './src/screens/lab-31';
import Lab32 from './src/screens/lab-32';
import Lab33 from './src/screens/lab-33';
import {name as appName} from './app.json';

const App = () => (
  <Navigator screens={{Lab31, Lab32, Lab33}} initialStack="Lab31" />
);

AppRegistry.registerComponent(appName, () => App);
