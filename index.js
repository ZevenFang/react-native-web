import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

window.platform = Platform.OS;

AppRegistry.registerComponent('ReactNativeWeb', () => App);
