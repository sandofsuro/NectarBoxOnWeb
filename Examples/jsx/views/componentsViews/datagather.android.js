
'use strict';

import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    NativeModules,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    Dimensions,
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

var NectarDataGather = NativeModules.NectarDataGather;
import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';

class DataGatherBlock extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        NectarDataGather.setScenarioType("E_UM_NORMAL");
                    }}>
                <View style={styles.button}>
                    <Text>设置场景类型</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        NectarDataGather.onProfileSignIn("example");
                    }}>
                <View style={styles.button}>
                    <Text>收集自有账号登录</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        NectarDataGather.onProfileSignIn("weibo", "example");
                    }}>
                <View style={styles.button}>
                    <Text>收集第三方账号登录</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        NectarDataGather.onProfileSignOff();
                    }}>
                <View style={styles.button}>
                    <Text>账号登出</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        NectarDataGather.enableEncrypt(true);
                    }}>
                <View style={styles.button}>
                    <Text>日志加密</Text>
                </View>
                </TouchableHighlight>
            </View>
        );
    }
}

class DataGather extends Component {
    constructor() {
        super();
    }
    renderScene(route, navigator) {
        var _scrollView: ScrollView;
		return (
		    <View style={{marginTop: 65-9, flex: 1, backgroundColor: '#eeeeee'}}>
		        <ScrollView
                  ref={(scrollView) => { _scrollView = scrollView; }}
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  style={styles.scrollView}>
    		        <UIExplorerBlock title={'友盟数据收集'}>
    		            <DataGatherBlock />
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
				initialRoute={{title:'数据收集'}}
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

module.exports = DataGather;