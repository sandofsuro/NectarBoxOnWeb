
'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
    TouchableOpacity,
    Navigator,
    Dimensions,
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

var CardRecognition = React.createClass({
    getInitialState: function() {
        this.text = null;
        return {
            text:"",
        };
    },
    setInputFocus: function() {
        this.text.focus();
    },
    renderScene(route, navigator) {
		return (
			<View style={styles.container}>
				<TextInput
				    ref={(text) => {
                        this.text = text;
                    }}
                    style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={"识别内容"}
                    placeholderTextColor="gray"
                    multiline={true}
                  />
			</View>
		);
	},
    
    renderNavTitle(route, navigator) {
		return (
			<Text style={styles.navBarTitleText}>
				{route.title}
			</Text>
		);
	},
	
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
	},
	
	renderNavRightButton(route, navigator) {
		var title = "获取焦点";
		
		return (
			<TouchableOpacity
			    onPress={() => this.setInputFocus()}
				style={styles.navBarRightButton}>
				<Text style={styles.navBarButtonText}>
					{title}
				</Text>
			</TouchableOpacity>
		);
	},
    
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
				initialRoute={{title:'POS机扫码识别'}}
			/>
		);
    }
});

var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: 'white',
		paddingTop: 55,
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
	}
});

module.exports = CardRecognition;