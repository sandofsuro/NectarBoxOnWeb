'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Camera from '../plugins/index.js';

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
            this.props.onReaded(event.data.type, event.data);
            this.setState({scaned:event.data});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera ref={(cam) => {
                        this.camera = cam;
                    }} 
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={this._onBarCodeRead.bind(this)}>
                </Camera>
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
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
