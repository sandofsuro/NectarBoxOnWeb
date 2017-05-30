
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView,
  TextInput,
  ListView
  } from 'react-native';

import Communications from './componentsViews/Communications';
import Camera from './componentsViews/camera';
import Push from './componentsViews/pushmsg.ios';
import Scan from './componentsViews/scan';
import AmapViewIOS from './componentsViews/AmapViewIOS';
import CommunicationsIOS from './componentsViews/CommunicationsIOS';
import Pay from './componentsViews/Pay';
import HotUpdate from './componentsViews/hotupdate';
import DataGather from './componentsViews/datagather';

var LIST_NAME = [
  '<AmapViewIOS>',
  '<Camera>',
  '<Communications>',
  '<CommunicationsIOS>',
  '<DataGather>',
//   '<HotUpdate>',
  '<Pay>',
  '<Push>',
  '<Scan>',
];

var LIST_COMPONENT = [
  AmapViewIOS,
  Camera,
  Communications,
  CommunicationsIOS,
  DataGather,
//   HotUpdate,
  Pay,
  Push,
  Scan,
];

var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
});
var componentArr = LIST_COMPONENT;

class ComponentsView extends Component{
    
  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: ds.cloneWithRows(LIST_NAME)
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
    return(
      <View style={styles.container}>

          <View style={{height:65,backgroundColor:'#eeeeee',marginTop:64}}>
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

class Components extends Component{
  render(){
    return(
     <View style={{flex: 1,paddingBottom:49}}>
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: ComponentsView,
          title: 'Plugin',
          navigationBarHidden: false
      }}/>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eeeeee'
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  text:{
    // fontSize:15,
    marginLeft:10,
    fontSize: 17,
    fontWeight: '500',
    // color: '#7E7F7E'
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