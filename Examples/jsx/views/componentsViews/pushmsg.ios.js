
'use strict';
import React, { Component } from 'react';
import {
  Alert,
    PushNotificationIOS,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    Dimensions,
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';

class HotUpdateBlock extends Component {
    
    componentWillMount() {
        PushNotificationIOS.addEventListener('notification', this._onNotification);
        PushNotificationIOS.addEventListener('register', this._onRegister);
    }
    
    componentWillUnmount() {
        PushNotificationIOS.removeEventListener('notification', this._onNotification);
        PushNotificationIOS.removeEventListener('register', this._onRegister);
    }
    
    _onNotification(notification) {
        Alert.alert(
            'Notification Received',
            notification.getMessage(),
            [{
                text: '确定',
                onPress: null,
            }]
        );
    }
    
    _onRegister(deviceToken) {
        Alert.alert(
            'DeviceToken',
            deviceToken,
            [{
                text: '确定',
                onPress: null,
            }]
        );
    }
    
    requestPermissions() {
        PushNotificationIOS.requestPermissions();
    }
    
    checkPermissions() {
        PushNotificationIOS.checkPermissions((permissions) => {
            Alert.alert("result", JSON.stringify(permissions));
        });
    }
    
    abandonPermissions() {
        PushNotificationIOS.abandonPermissions();
    }
    
    render() {
        return (
		    <View>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.requestPermissions();
                    }}>
                <View style={styles.button}>
                    <Text>申请权限</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.checkPermissions();
                    }}>
                <View style={styles.button}>
                    <Text>检查权限</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.abandonPermissions();
                    }}>
                <View style={styles.button}>
                    <Text>移除权限</Text>
                </View>
                </TouchableHighlight>
            </View>
		);
    }
}

class PushMsg extends Component {
    
    renderScene(route, navigator) {
        var _scrollView: ScrollView;
		return (
		    <View style={{marginTop: 65, flex: 1, backgroundColor: '#eeeeee'}}>
		        <ScrollView
                  ref={(scrollView) => { _scrollView = scrollView; }}
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  style={styles.scrollView}>
    		        <UIExplorerBlock title={'推送'}>
    		            <HotUpdateBlock />
    	            </UIExplorerBlock>
	            </ScrollView>
	        </View>
		);
	}
    
    renderNavTitle(route, navigator) {
		return (
			<Text style={styles.navBarTitleText}>
				{route.title}
			</Text>
		);
	}
	
	renderNavLeftButton(route, navigator) {
	    var title = "返回";
	    
		return (
			<TouchableOpacity
				onPress={() => this.props.navigator.pop()}
				style={styles.navBarLeftButton}>
				<Text style={styles.navBarButtonText}>
					{title}
				</Text>
			</TouchableOpacity>
		);
	}
	
	renderNavRightButton(route, navigator) {
		var title = "";
		
		return (
			<TouchableOpacity
				style={styles.navBarRightButton}>
				<Text style={styles.navBarButtonText}>
					{title}
				</Text>
			</TouchableOpacity>
		);
	}
    
    render() {
        var bar = (
			<Navigator.NavigationBar
				routeMapper={{
					LeftButton:this.renderNavLeftButton,
					RightButton:this.renderNavRightButton,
					Title:this.renderNavTitle,
				}}
				style={styles.navBar}
			/>
		);
		return (
			<Navigator style={styles.navigator}
				navigationBar={bar}
				renderScene={this.renderScene}
				initialRoute={{title:'推送'}}
			/>
		);
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: 'white',
		paddingTop: 55,
		paddingLeft: 20,
		paddingRight: 20,
    },
    navigator: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	navBar: {
		backgroundColor: '#262929',
		justifyContent: 'center',
	},
	navBarTitleText: {
		fontSize:20,
		fontWeight: '400',
		marginVertical: 9,
		width: 3 * (Dimensions.get('window').width) / 5,
		textAlign: 'center',
		color: '#ffffff',
	},
	navBarButtonText: {
		fontSize:15,
		color: '#ffffff',
		marginVertical: 12,
	},
	navBarLeftButton: {
		paddingLeft: 10,
		marginVertical: 2,
	},
	navBarRightButton: {
		paddingRight: 10,
	},
	scrollView: {
	    paddingTop: 10,
        height: 390,
    },
	wrapper: {
	    borderRadius: 5,
	    marginBottom: 5,
	},
	button: {
	    backgroundColor: '#eeeeee',
	    padding: 10,
	},
});

module.exports = PushMsg;