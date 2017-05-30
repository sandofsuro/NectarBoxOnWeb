/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule Plugins
 * @flow
 */
'use strict';

var React = require('react-native');
var NectarBoxPluginsList = require('./NectarBoxPluginsList');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          back
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <View/>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

var Plugins = React.createClass({

  getInitialState: function() {
    return {
      openExternalExample: (null: ?React.Component),
    };
  },

  renderScene: function(route, navigationOperations, onComponentRef) {
    if (route.name === 'list') {

      return (
        <NectarBoxPluginsList
          navigator={navigationOperations}
        />
      );
    }else if(route.name == 'example'){
      return (
        <route.example
          navigator={navigationOperations}
        />
      );
    }
  },

  render: function() {
    var initialRoute = {name: 'list', title: 'Plugins'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
          }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
  navBar: {
    backgroundColor: '#efeff4',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  navBarText: {
    fontSize: 16
  },
  navBarTitleText: {
    color: '#000',
    fontWeight: 700
  },
  navBarLeftButton: {
    color: '#007aff',
    paddingLeft: 10,
  },
});

AppRegistry.registerComponent('Plugins', () => Plugins);

var app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.runApplication('Plugins', {
  rootTag: app
})

module.exports = Plugins;
