import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  NavigatorIOS,
  Navigator,
  ScrollView,
  TextInput,
  ListView,
  BackAndroid,
  Dimensions,
  StatusBar,
  Platform,
  } from 'react-native';

import Communications from './componentsViews/Communications';
import Camera from './componentsViews/camera';
import Scan from './componentsViews/scan';
import Pay from './componentsViews/Pay';
import Printer from './componentsViews/print';
import HotUpdate from './componentsViews/hotupdate';
import DataGather from './componentsViews/datagather';
import SecondScreen from './componentsViews/secondscreen';

var LIST_NAME = [
  '<Camera>',
  '<Communications>',
  '<DataGather>',
//   '<HotUpdate>',
  '<Pay>',
  '<Printer>',
  '<Scan>',
  '<SecondScreen>',
];

var LIST_COMPONENT = [
  Camera,
  Communications,
  DataGather,
//   HotUpdate,
  Pay,
  Printer,
  Scan,
  SecondScreen,
];

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    
   LeftButton: function(route, navigator, index, navState) {
     if (route.title === 'Plugin') {
       return null;
     }
     var previousRoute = navState.routeStack[index - 1];
     return (
       <TouchableOpacity
         onPress={() => navigator.pop()}
         style={styles.navBarLeftButton}>
         <Image style={styles.button} source={{uri: GLOBAL.WebRoot + 'web/jsx/UIExplorer/NavigationExperimental/assets/back-icon@3x.ios.png'}} />
       </TouchableOpacity>
     );
   },
   RightButton: function(route, navigator, index, navState) {
     return null;
   },

   Title: function(route, navigator, index, navState) {
     return (
      <View style={styles.navBarTitle}>
       <Text style={styles.navBarTitleText}>
         {route.title}
       </Text>
     </View>
     );
   },
 };

class Components extends Component{

    
  render(){
    return(
          <Navigator
              style = {styles.navigator}
              initialRoute={{ title: 'Plugin', component: ComponentsView }}
              configureScene={(route,routeStack) => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />;
              }} 
              navigationBar={
                <Navigator.NavigationBar
                style={styles.navbar}
                routeMapper={NavigationBarRouteMapper}/>
                  
              }
          />
    );
  }

}
 
var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
});
var componentArr = LIST_COMPONENT;

class ComponentsView extends Component{
  
  //控制硬件的反馈按钮  
  componentWillMount() {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }
  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
  onBackAndroid = () => {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };
   
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(LIST_NAME),
    };
  }

    
  _renderRow(rowData:string, sectionID:number,rowID: number){
    
  return(
    <View>
    <TouchableHighlight onPress={this._onPressRow.bind(this, rowID,rowData)}>
       <View style={styles.item}>
        <Text style={styles.text}>{rowData}</Text>
       </View>
    </TouchableHighlight>   
       <View style={styles.separator}></View>
    </View>
    
    );
  }    
   
  render(){
    // alert(this.state.dataSource.length);
    return(
      <View style={styles.container}>
         
          <View style={{height:65,backgroundColor:'#eeeeee',marginTop:64-8}}>
          <TextInput style={styles.search} placeholder="Search..."
                   onSubmitEditing={this._onSubmitEditing.bind(this)}
                   onChangeText={this._onChangeText.bind(this)}
                   returnKeyType="search"
                   clearButtonMode="always"
                   autoFocus={false} />
                   
          </View>
        
          <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
        //   dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}

          />

        
      </View>
    );
  }

 
  _onPressRow(rowID,rowData){
    this.props.navigator.push({
      component: componentArr[rowID],
      title: rowData,
      barTintColor: '#fff',
    });
  }
  
  _onSubmitEditing() {
  }

  _onChangeText(text){
    const filterText = text || '';
    const filterRegex = new RegExp(String(filterText),'i');//'i'表示对大小写不敏感
    var arr = [];
    componentArr = [];
    for(var i = 0 ;i < LIST_NAME.length;i++){
        // alert(LIST_NAME[i]);
        if(filterRegex.test(LIST_NAME[i])){
            arr.push(LIST_NAME[i]);
            componentArr.push(LIST_COMPONENT[i]);
        }
        const newDataSource = ds.cloneWithRows(
              arr
        ); 
        this.setState({dataSource:newDataSource});
    } 
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eeeeee'
  },
  navigator: {
	flex:1,
	justifyContent: 'center',
	alignItems: 'stretch',
  },
  navbar: {
    justifyContent: 'center',
    backgroundColor: '#E9EAED',
    height: 56,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitle: {
    flex:1,
    justifyContent: 'center',
    alignItems:'stretch',
    backgroundColor:'#E9EAED',
  },
  navBarTitleText: {
    color: 'black',
    fontWeight: '300',
    fontSize: 20,
    width: 3 * (Dimensions.get('window').width) / 5,
	textAlign: 'center',
  },
  navBarLeftButton: {
    // paddingLeft: 10,
    // paddingTop:8,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  button: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain'
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  text:{
    marginLeft:10,
    fontSize: 17,
    fontWeight: '500',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  search: {
    marginLeft: 10,
    marginRight: 10,
    height: 35,
    borderWidth: 1,
    borderRadius:3,
    marginTop:10,
    // fontSize:15,
    backgroundColor:'white',
    borderColor: '#cccccc',
    paddingLeft: 8,
  }
});

module.exports = Components;