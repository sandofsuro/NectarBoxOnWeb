





'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactPortal=require('../Portal/Portal.web');var _ReactPortal2=_interopRequireDefault(_ReactPortal);
var _ReactText=require('../Text/Text.web');var _ReactText2=_interopRequireDefault(_ReactText);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var LONG_DELAY=3500;
var SHORT_DELAY=2000;

var Toast={

SHORT:SHORT_DELAY,
LONG:LONG_DELAY,

show:function show(message,duration){
_ReactPortal2.default.showModal('toast',_react2.default.createElement(_ReactText2.default,{style:styles.container},message));
setTimeout(function(){return _ReactPortal2.default.closeModal('toast');},duration);
}};


var styles=_ReactStyleSheet2.default.create({
container:{
backgroundColor:'rgba(0,0,0,.65)',
color:'#ffffff',
padding:'4 8',
position:'absolute',
left:'50%',
bottom:'50%',
fontSize:14,
lineHeight:18,
borderRadius:2,
transform:'translateX(-50%)'}});exports.default=



Toast;