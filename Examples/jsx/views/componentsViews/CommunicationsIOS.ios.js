/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AlertIOS,
    NativeModules,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

var Communication = NativeModules.Communication;

import UIExplorerBlock from '../../UIExplorer/UIExplorerBlock';


class CommunicationBlock extends React.Component {
    
    call() {
        Communication.call('10000',(res) => {
           if (res) {
            AlertIOS.alert(res);
           } 
        });
    }

    messageNumberWithMessage() {
        Communication.messageNumberWithMessage('10000','发短信给10000',(res) => {
            if (res) {
            AlertIOS.alert(res);
           }
        });
    }

    openContacts() {
        Communication.openContacts((name,res) => {
           if (res) {
            AlertIOS.alert(name);
            AlertIOS.alert(res);
           }
        });
    }
    
    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                    onPress={this.call}>
                  <View style={styles.button}>
                    <Text>打电话</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.wrapper}
                    onPress={this.messageNumberWithMessage}>
                  <View style={styles.button}>
                    <Text>发短信</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.wrapper}
                    onPress={this.openContacts}>
                  <View style={styles.button}>
                    <Text>打开通讯录</Text>
                  </View>
                </TouchableHighlight>
                
            </View>
        );
    }
}

class CommunicationView extends Component {
  render() {
		return (
			<View style={{marginTop: 65, flex: 1, backgroundColor: '#eeeeee'}}>
		        <ScrollView
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  style={styles.scrollView}>
    		        <UIExplorerBlock title={'通讯'}>
    		            <CommunicationBlock />
    	            </UIExplorerBlock>
	            </ScrollView>
	        </View>
		);
    }
}

const styles = StyleSheet.create({
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

module.exports = CommunicationView;