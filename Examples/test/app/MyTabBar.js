import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  Platform
} from 'react-native';

import HomePage from './HomePage'
import FavorPage from './FavorPage'

class MyTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBarItem : 'home'
    }
  }
  render() {
    return (
      <TabBarIOS
        barTintColor = 'white'
        tintColor = 'green'
        unselectedItemTintColor = 'gray'
        translucent = {true}
        >
          <TabBarIOS.Item
            title = '首页'
            icon = {require('./Image/home.png')}
            selectedIcon = {require('./Image/home-selected.png')}
            selected = {this.state.selectedBarItem === 'home'}
            onPress = {()=>{this.setState({selectedBarItem:'home'})}}
            >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                style={{flex:1}}
                initialRoute = {{
                  component: HomePage,
                  title: '首页'
                }}
                configureScene = {(route) =>
                  {
                    return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                }
                renderScene = { (route, navigator) => {
                  let HomePage = route.component;
                  return <HomePage navigator={navigator}/>
                }}
                >
              </NavigatorIOS>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = '收藏'
            icon = 'favorites'
            selected = {this.state.selectedBarItem === 'favor'}
            onPress = {()=>{this.setState({selectedBarItem:'favor'})}}
            >
              <FavorPage></FavorPage>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({

});
AppRegistry.registerComponent('MyTabBar', () => MyTabBar);

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('MyTabBar', {
    rootTag: app
  })
}
