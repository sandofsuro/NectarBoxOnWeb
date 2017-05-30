/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyTabBar from './app/MyTabBar'

export default class TabBar_Navigator extends Component {
  render() {
    return (
      <MyTabBar></MyTabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('TabBar_Navigator', () => TabBar_Navigator);
var app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.runApplication('TabBar_Navigator', {
  rootTag: app
})