import {AppRegistry} from 'react-native';
import App from './src/App'; // Update this line
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);