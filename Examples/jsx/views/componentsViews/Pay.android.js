/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NativeModules } from 'react-native';


var WXPay = NativeModules.WXPay;
var Alipay = NativeModules.Alipay;

let appid = 'wx51b8febede7ca75b';

function show(title, msg) {
    AlertIOS.alert(title+'', msg+'');
}

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  ScrollView,
  TouchableHighlight,
  NativeAppEventEmitter,
  Image,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';

class PayView extends Component {

    constructor(){
        super();
        this.state={
          isSupport: false,
        }
   }
  
    componentDidMount() {
        this.registerApp();
        DeviceEventEmitter.addListener('finishedPay', function(e: Event) {
            if (parseInt(Event.errCode) === 0) {
                Alert.alert('支付结果','支付成功');
            }else if (parseInt(Event.errCode) === -2){
                Alert.alert('支付结果','用户取消');
            }else {
                Alert.alert('支付结果',Event.strMsg);
            }
        });
    }
    

    Alipay(){

      Alipay.pay("body=\"商品订单支付\"&total_fee=\"0.01\"&seller_id=\"zhongkefuchuang@126.com\"&notify_url=\"http%3A%2F%2Fweb.jinlb.cn%2Feten%2Fapp%2Fcharge%2Falipay%2Fnotify\"&out_trade_no=\"PO2016072900000071\"&service=\"mobile.securitypay.pay\"&payment_type=\"1\"&partner=\"2088211510687520\"&_input_charset=\"utf-8\"&subject=\"商品订单\"&sign=\"f7oDTfExzbFjGWCj94weGWEEi3nZ6tTY7lZq%2Fpz%2Fl%2BUSm69Ara74E8K5dZInuYGNX4NyauAQBnkgRjmWcoPHFB3E6wQnJdD5eF%2FgPIHq4%2FrzN7mTC3fmhngHuU%2FbmKu6NzofZwz2nfloR8MCKnsCueNcDHWIECUQ5zBRzx3aBsw%3D\"&sign_type=\"RSA\"")
       .then(result => {
      console.log("result is ", result);
      alert(result);
      })
       .catch(error => {
      console.log(error);
      alert(error);
      });

    }

    
    registerApp() {
        WXPay.registerApp(appid);
    }
    
    
    async wechatPay() {

        var result = await WXPay.isWXAppInstalled();
        this.setState({
            isSupport: result.toString(),
        });
        var result = await WXPay.isWXAppSupportApi();
        this.setState({
            isSupport: result.toString(),
        });

        if (this.state.isSupport == 'true') {

            var params = {
            'appid': appid,
            'timestamp': '1469782673',
            'partnerid': '1224611601',
            'prepayid': 'wx201607291657537833b680000344128722',
            'noncestr':'a29b616a094f43a33240039128d1cf4a',
            'package': 'Sign=WXPay',
            'sign': '981C9FF86DE86926F53DA37978E6AE88'
            };
            
            WXPay.pay(JSON.stringify(params));
        }
    }


    render() {
        return (
          <View style={styles.container}>  
          
            <View style={styles.wrapper}>
                <Image style = {styles.image}
                    source={{uri: GLOBAL.WebRoot + 'web/img/computer.png'}}
                    />
                <View style={{paddingTop:40}}>
                    <Text style={styles.title}>台式电脑</Text>
                    <Text style={styles.price}>￥5000.00</Text>
                </View>
            </View>
                
            <Text style={{height:30,alignItems: 'center',marginTop:30,fontSize:18,color:'#bbbbbb',marginLeft:10,}}>请选择支付方式</Text>
            
            <View style={{borderWidth:1,borderColor:'#bbbbbb'}}>
                <TouchableHighlight 
                        style={styles.button} underlayColor="#bbbbbb"
                        onPress={this.Alipay.bind(this)}>
                        <Text style={styles.buttonTitle}>支付宝支付</Text>
                </TouchableHighlight>
    
                <View style={{height:1,backgroundColor:'#bbbbbb'}}></View>
                <TouchableHighlight 
                        style={styles.button} underlayColor="#bbbbbb"
                        onPress={this.wechatPay.bind(this)}>
                        <Text style={styles.buttonTitle}>微信支付</Text>
                </TouchableHighlight>
            </View> 

         </View>    
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 64,
        backgroundColor:'#eeeeee'
    },
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        height:150,
    },
    image: {
        marginLeft:10,
        marginTop:25,
        width: 100,
        height: 100,
    },
    title: {
        fontSize:20,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginLeft:15,
    },
    price: {
        fontSize:35,
        color:'red',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginLeft:10,
    },
    button: {
        width: Dimensions.get('window').width,
        height: 64,
        backgroundColor: '#eeeeee',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 23,
        marginLeft:10,
        fontWeight: 'bold',
        
    }
  
});

module.exports = PayView;