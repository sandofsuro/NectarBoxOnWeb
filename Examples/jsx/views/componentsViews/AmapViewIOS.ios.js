import React, { Component } from 'react';
import Map from './amap';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  AlertIOS,
  TextInput,
  ScrollView,
} from 'react-native';

import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';
var AMapKey = 'fe1921ee0e97e55dbd296c850508bd43';

class MapViewBlock1 extends React.Component {
    constructor(){
        super();
        this.state={
          latitude: 0,
          longitude: 0,
          title:'',
          subtitle:'',
        }
   }
   
   _onGetLocation(event){
      this.setState({
        latitude: event['latitude'],
        longitude: event['longitude'],
        title:event['title'],
        subtitle:event['subtitle'],
      });
   }


  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey = {AMapKey} 
          onGetLocation={(event)=>{this._onGetLocation(event)}} 
          showsCompass={false} //不显示指南针
          >
        </Map>
        <View style={styles.row}>
          <Text>
            {'latitude:'+this.state.latitude}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            {'longitude:'+this.state.longitude}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            {'title:'+this.state.title}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            {'subtitle:'+this.state.subtitle}
          </Text>
        </View>

      </View>
    );
  }
  
}
class MapViewBlock2 extends React.Component {
    constructor(){
    super();
    
  }
 
  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showTraffic={true} 
          showsCompass={false}
          >
        </Map>

      </View>
    );
  }
  
}
class MapViewBlock3 extends React.Component {
    constructor(){
    super();
    
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          >
        </Map>

      </View>
    );
  }
  
}
class MapViewBlock4 extends React.Component {
    constructor(){
    super();
  }
 
  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showsCompass={false} 
          zoomEnabled={false} 

          >
        </Map>

      </View>
    );
  }
  
}
class MapViewBlock5 extends React.Component {
    constructor(){
    super();
    
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showsCompass={false} 
          scrollEnabled={false} 

          >
        </Map>

      </View>
    );
  }
  
}
class MapViewBlock6 extends React.Component {
    constructor(){
    super();
    this.state={
      GeoName:'',
    }
  }

  _onGeocodeSearch(event){
      this.setState({
        GeoName:'北京大学',
      }); 
  }

  render() {
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showsCompass={false} 

          GeoName={this.state.GeoName}
          onGeocodeSearch={(event)=>{this._onGeocodeSearch(event)}}
          >
        </Map>

      </View>
    );
  }
  
}
class MapViewBlock7 extends React.Component {
    constructor(){
        super();
          this.state={
            KeywordsCity:'',
            KeywordsName:'',
        }
  }
  
   _onKeywordsSearch(event){
     this.setState({
        KeywordsCity:'北京',
        KeywordsName:'大学',

      });     
   }
  
   

  render() {

    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showsCompass={false} 

          KeywordsCity={this.state.KeywordsCity}
          KeywordsName={this.state.KeywordsName}
          onKeywordsSearch={(event)=>{this._onKeywordsSearch(event)}}
          >
        </Map>

      </View>
    );
  }

}
class MapViewBlock8 extends React.Component {
    constructor(){
    super();
      this.state={
      AroundName:'',
    }
  }
  
  _onAroundSearch(event){
    this.setState({
        AroundName:'肯德基',

      });     
  }

  render() {
    
    return (
      <View style={styles.container}>

        <Map style={styles.map} 
          AMapKey={AMapKey} 
          showsCompass={false} 

          AroundName={this.state.AroundName}
          onAroundSearch={(event)=>{this._onAroundSearch(event)}}
          >
        </Map>

      </View>
    );
  }
  
}

class MapView extends Component {
    constructor() {
        super();
    }
    
    render() {
    return (
      <View style={{marginTop: 65, flex: 1, backgroundColor: '#eeeeee'}}>
            <ScrollView
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  style={styles.scrollView}>
                <UIExplorerBlock title={'定位'}>
                    <MapViewBlock1 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'显示路况'}>
                    <MapViewBlock2 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'显示指南针'}>
                    <MapViewBlock3 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'关闭缩放'}>
                    <MapViewBlock4 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'关闭拖动'}>
                    <MapViewBlock5 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'地理编码查询'}>
                    <MapViewBlock6 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'关键字查询'}>
                    <MapViewBlock7 />
                  </UIExplorerBlock>
                  
                  <UIExplorerBlock title={'周边查询'}>
                    <MapViewBlock8 />
                  </UIExplorerBlock>
              </ScrollView>
          </View>
    );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  scrollView: {
      paddingTop: 10,
  }
  
});

module.exports = MapView;