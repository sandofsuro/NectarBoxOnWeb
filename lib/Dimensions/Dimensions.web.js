





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var dimensions={

window:{
get width(){return document.documentElement.clientWidth;},
get height(){return document.documentElement.clientHeight;},
get scale(){return window.devicePixelRatio||1;}},

modalFullscreenView:{
width:screen.width,
height:screen.height}};var



Dimensions=function(){function Dimensions(){_classCallCheck(this,Dimensions);}_createClass(Dimensions,null,[{key:'get',value:function get(














dim){
return dimensions[dim];
}}]);return Dimensions;}();exports.default=


Dimensions;