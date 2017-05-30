/**
* NectarBox
* @author recluse
* Wed Oct 26 16:19:12 CST 2016
*/
'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, Text } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import UIExplorerPage from './UIExplorer/UIExplorerApp';
import ComponentsPage from './views/components';

var img2_base64 = 'data:image/png;base64,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5ag2Z57ZXmjlzcRC5864VnslGrmRrXyNQJ0qFSodbsOzO8PazrrBnT2au9Su8KqXGZ16QqGRnf+kpbO0tyWZ0jnt+jGt4UTH+qC7aVdYEKnJhE59b3ChjbZ3N21esjq8KkyTcG4LQ8yyPOWYYzfR3m5BdH1hahw0Bk410Ied7vsz4ctRfLDGtzvUMt8z3urggaOMIdcT0ey9OPZxPJiu3E09Qxq+GIV79nbgM4k8/2tzsyxctyLXU9F4P5biq7eFqco824b/1w04zdaQ9n7nx2rRx8I0Qeluxc1RJPb5WB7GFRr8prO+SOYwNEoyV7fImrfERB+pckFPk4aZUc52azsLT1/PC7zw+fhqMuGeSFEWpTuHgHz3afh8fHrYiP6eDIk3+FWaZEq+u1Sqd0tPk03GMG+E413nyVbCYwPNU6HB/A6eIe5yHOf1aA5fblbSLJ7jPG+oF/hDeIbhMyOTwZpx7jU7DO8f9Jo1Nsk2yETT9Mdr/t7H3TeO8dHPj9OcyjzkmYwe6s0wEqZ4WXlKMrDax67KbMCoKyJ6RU5xpnOMkKXcCksssymzXfw/RTt9MMAqua8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDctMjVUMjE6NDk6NDIrMDg6MDBz/hzJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTI0VDIxOjM2OjA1KzA4OjAwgWip9wAAAE50RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi44LjgtMTAgUTE2IHg4Nl82NCAyMDE1LTA3LTE5IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnBQycNQAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgcgt1lgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANTQwHPTG6AAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzOTgzNDY1NjUSvHUwAAAAE3RFWHRUaHVtYjo6U2l6ZQAxNy41S0JCuLYKMwAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzExNDk1LzExNDk1NTUucG5n8LgqUAAAAABJRU5ErkJggg==';
var img1_base64 = 'data:image/png;base64,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KwM6dwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNS0wNFQyMTo0NDo1MyswODowMIRIR4gAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUzM8q8AZUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTMzWU1RyAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxMzk5MjExMDkzQpBh+QAAABN0RVh0VGh1bWI6OlNpemUAMTAuMUtCQirRrdwAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTYwMi8xMTYwMjA2LnBuZ2hohJkAAAAASUVORK5CYII=';

class Nectar extends Component{
  componentWillMount() {
     if(this.props.WebRoot != null && GLOBAL.WebRoot == null) {
        GLOBAL.WebRoot = this.props.WebRoot;
     }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'UIExplorer',
    };
  }
  
  render() {
     return (
         <TabNavigator tabBarStyle={styles.tab}>
         
          <TabNavigator.Item
              title="UIExplorer"
              selected={this.state.selectedTab === 'UIExplorer'}
              renderIcon={() => <Image style={styles.tabIcon} source={{uri: img1_base64, scale:3.5}} />}
              onPress={() => {
                this.setState({
                  selectedTab: 'UIExplorer'
                });
              }}>
              {this._renderView('UIExplorer')}
          
          </TabNavigator.Item>
          
          <TabNavigator.Item
              title="Plugin"
              selected={this.state.selectedTab === 'components'}
              renderIcon={() => <Image style={styles.tabIcon} source={{uri: img2_base64, scale:3.5}} />}
              onPress={() => {
                this.setState({
                  selectedTab: 'components'
                });
              }}>
              {this._renderView('components')}
          </TabNavigator.Item>
          
        </TabNavigator>
         );
  }
  
  _renderView(name){
    var view = null;
    switch (name){
      case 'UIExplorer':
        view = <UIExplorerPage></UIExplorerPage>
        break;
      default :
        view = <ComponentsPage></ComponentsPage>
        break;
    }
    return  (<View style={styles.listViewContent}>{view}</View>);
  }
}

var styles = StyleSheet.create({
  listViewContent: {
		flex: 1,
	},
  tabIcon:{  
    width:25,  
    height:25,  
  }, 
  tab:{  
    alignItems:'center',  
    backgroundColor:'#E9EAED',  
  },  
  
});

AppRegistry.registerComponent('MDP', () => Nectar);