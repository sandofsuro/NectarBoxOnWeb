
'use strict';

import React, { Component } from 'react';
import {
    Navigator,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Barcode from './barcode';

class Scan extends Component{
    render() {
        return (
            <View style={styles.container}>
				<Barcode.Scanner onReaded={(type, data) => {
					
				}} />
			</View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

module.exports = Scan;