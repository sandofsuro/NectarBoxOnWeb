
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

import AKCommunications from '../plugins/AKCommunications.js';
import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';

class CommunicationsBlock extends React.Component {
    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => AKCommunications.phonecall('10000', true)}>
                  <View style={styles.button}>
                    <Text>Make phonecall</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => AKCommunications.text('10000', '话费查询')}>
                  <View style={styles.button}>
                    <Text>Send a text/iMessage</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => AKCommunications.email(['1297502808@qq.com'], ['shiwenbo@jiuqi.com.cn'], ['shiwenbo@jiuqi.com.cn'],'My Subject','My body text')}>
                  <View style={styles.button}>
                    <Text>Send an email</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => AKCommunications.web('https://github.com/facebook/react-native')}>
                  <View style={styles.button}>
                    <Text>Open an url</Text>
                  </View>
                </TouchableHighlight>
            </View>
        );
    }
}

class Communications extends Component {
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
    		        <UIExplorerBlock title={'通讯'}>
    		            <CommunicationsBlock />
    	            </UIExplorerBlock>
	            </ScrollView>
	        </View>
		);
    }
}

var styles = StyleSheet.create({
	scrollView: {
	    paddingTop: 10,
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


module.exports = Communications;