'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Scanner from '../plugins/BarcodeScanner.js';

class BarcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cameraType : props.cameraType? props.cameraType : 'back',
            scaned : ""
        };
    }


    _onBarCodeRead(event) {
        if(this.props.onReaded) {
            this.props.onReaded(event.type, event.data);
            this.setState({scaned:event.data});
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Scanner style={styles.scanner}
                    torchMode="off"
                    cameraType={this.state.cameraType}
                    onBarCodeRead={this._onBarCodeRead.bind(this)}/>
                <Text style={styles.label}>
                    {this.state.scaned}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    scanner: {
        flex:1,
    },
    label: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        padding: 10,
        backgroundColor: 'black',
    },
});

module.exports = {
    Scanner: BarcodeScanner
};