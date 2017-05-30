'use strict';

import React, { Component } from 'react';
import {
    Alert,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native';

import Camera from '../plugins/index.js';

var Camera2 = React.createClass({
    getInitialState: function() {
        this.camera = null;
        return {
            aspect: Camera.constants.Aspect.fill,
            captureTarget: Camera.constants.CaptureTarget.cameraRoll,
            type: Camera.constants.Type.back,
            orientation: Camera.constants.Orientation.auto,
            flashMode: Camera.constants.FlashMode.auto,
        };
    },
    
    takePicture: function() {
        if (this.camera) {
            this.camera.capture()
            .then((data) => {
                console.log(data);
                Alert.alert("提示","照片已保存：" + data.path);
            })
            .catch(err => console.error(err));
        }
    },
    
    switchType: function() {
        let newType;
        const { back, front } = Camera.constants.Type;
        if (this.state.type === back) {
            newType = front;
        } else if (this.state.type === front) {
            newType = back;
        }

        this.setState({
            type: newType,
        });
    },
    
    switchFlash: function() {
        let newFlashMode;
        const { auto, on, off } = Camera.constants.FlashMode;

        if (this.state.flashMode === auto) {
            newFlashMode = on;
        } else if (this.state.flashMode === on) {
            newFlashMode = off;
        } else if (this.state.flashMode === off) {
            newFlashMode = auto;
        }

        this.setState({
            flashMode: newFlashMode,
        });
    },

    render() {
      return (
        <View style={styles.container}>
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={this.state.aspect}
                captureTarget={this.state.captureTarget}
                type={this.state.type}
                flashMode={this.state.flashMode}
                defaultTouchToFocus
            />
            <View style={[styles.overlay, styles.topOverlay]}>
                <TouchableOpacity
                    style={styles.typeButton}
                    onPress={this.switchType}>
                    <Text style={styles.text}>摄像头</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.flashButton}
                    onPress={this.switchFlash}>
                    <Text style={styles.text}>闪光灯</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.overlay, styles.bottomOverlay]}>
                <TouchableOpacity
                    style={styles.captureButton}
                    onPress={this.takePicture}>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center',
    },
    topOverlay: {
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    captureButton: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 40,
    },
    typeButton: {
        padding: 10,
    },
    flashButton: {
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
    }
});

module.exports = Camera2;