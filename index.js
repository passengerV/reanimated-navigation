/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src';
import {name as appName} from './app.json';

//! Android inverted FlatList will cause performance issues, so we have to enable deprecated scaleY property to be to able to use it on the native side.
import ViewReactNativeStyleAttributes from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
ViewReactNativeStyleAttributes.scaleY = true;

AppRegistry.registerComponent(appName, () => App);
