
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

var Printer = NativeModules.Printer;
import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';

class POSPrintBlock extends Component {
    Bytes2Str(arr) {
        var str = "";
        for(var i=0; i<arr.length; i++)
        {
           var tmp = arr[i].toString(16);
           if(tmp.length == 1)
           {
               tmp = "0" + tmp;
           }
           str += tmp;
        }
        return str;
    }
    
    /*执行命令*/
    executeOrder() {
        var arr = ['0x1B', '0x33', '0x00'];
        Printer.executeOrder(this.Bytes2Str(arr));
    }
    /*打印文本*/
    printText() {
        Printer.printText("蜂语网络");
    }
    /*打印图片*/
    printBmp() {
        Printer.printBmp("https://developer.beecode.cn/api/workspace/Nectarplugin/static/resource?type=img&file_path=/com.beecode.plugin.demo/web/img/erweima.png");
    }
    /*裁纸*/
    cutPaper() {
        Printer.cutPaper();
    }
    /*设置左侧留白*/
    setLeftEmpty() {
        Printer.setLeftEmpty();
    }
    /*设置字符大小*/
    setFontSize() {
        Printer.setFontSize();
    }
    /*设置对齐方式*/
    setAlignType() {
        Printer.setAlignType();
    }
    /*设置打印模式*/
    setPrintMode() {
        Printer.setPrintMode();
    }
    /*设置行间距*/
    setLineDistance() {
        Printer.setLineDistance();
    }
    /*走纸*/
    skipPaper(lines) {
        Printer.skipPaper(lines);
    }
    /*换行*/
    skipLine() {
        Printer.skipLine();
    }
    /*开钱箱*/
    openMoneyBox() {
        Printer.openMoneyBox();
    }
    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.executeOrder();
                    }}>
                    <View style={styles.button}>
                        <Text>执行命令</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.printText();
                    }}>
                    <View style={styles.button}>
                        <Text>打印文本</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.printBmp();
                    }}>
                    <View style={styles.button}>
                        <Text>打印图片</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.cutPaper();
                    }}>
                    <View style={styles.button}>
                        <Text>裁纸</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.setLeftEmpty();
                    }}>
                    <View style={styles.button}>
                        <Text>设置左侧留白</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.setFontSize();
                    }}>
                    <View style={styles.button}>
                        <Text>设置字符大小</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.setAlignType();
                    }}>
                    <View style={styles.button}>
                        <Text>设置对齐方式</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.setPrintMode();
                    }}>
                    <View style={styles.button}>
                        <Text>设置打印模式</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.setLineDistance();
                    }}>
                    <View style={styles.button}>
                        <Text>设置行间距</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.skipPaper(3);
                    }}>
                    <View style={styles.button}>
                        <Text>走纸</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.skipLine();
                    }}>
                    <View style={styles.button}>
                        <Text>换行</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this.openMoneyBox();
                    }}>
                    <View style={styles.button}>
                        <Text>开钱箱</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

class Print extends Component {
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
    		        <UIExplorerBlock title={'POS机打印'}>
    		            <POSPrintBlock />
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
				initialRoute={{title:'打印机'}}
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

module.exports = Print;