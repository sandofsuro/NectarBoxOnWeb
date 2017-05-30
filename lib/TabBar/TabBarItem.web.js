




'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactImage=require('../Image/Image.web');var _ReactImage2=_interopRequireDefault(_ReactImage);
var _ReactText=require('../Text/Text.web');var _ReactText2=_interopRequireDefault(_ReactText);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TabBarItem=_react2.default.createClass({displayName:'TabBarItem',
propTypes:{



badge:_react.PropTypes.oneOfType([
_react.PropTypes.string,_react.PropTypes.number]),




icon:_react.PropTypes.object,




selectedIcon:_react.PropTypes.string,




onPress:_react.PropTypes.func,




selected:_react.PropTypes.bool,



style:_react.PropTypes.object,




title:_react.PropTypes.string,



selectedColor:_react.PropTypes.string},


_onClick:function _onClick(){
if(this.props.onPress){
this.props.onPress();
}
if(this.props.handleTouchTap){
this.props.handleTouchTap(this.props.index);
}
},

render:function render(){

var tabStyle=_extends({},styles.tab,this.props.style||{},{color:this.props.selectedColor&&this.props.selected?this.props.selectedColor:null});

return(
_react2.default.createElement('li',{style:tabStyle},
_react2.default.createElement('a',{onClick:this._onClick,style:styles.link},
this.props.badge?_react2.default.createElement('em',{style:styles.badge},this.props.badge):'',
_react2.default.createElement(_ReactImage2.default,{source:this.props.selected&&this.props.selectedIcon?this.props.selectedIcon:this.props.icon,style:styles.icon}),
_react2.default.createElement(_ReactView2.default,{style:{marginTop:4}},
_react2.default.createElement(_ReactText2.default,{style:styles.title},this.props.title)))));




}});


var styles=_ReactStyleSheet2.default.create({
tab:{
display:'table-cell',
textAlign:'center',
position:'relative'},

link:{
display:'block',
padding:'0.3em 0'},

badge:{
display:'inline-block',
position:'absolute',
top:0,
left:'52%',
color:'#FFF',
backgroundColor:'#FF0000',
height:'1.6em',
lineHeight:'1.6em',
minWidth:'1.6em',
fontSize:'0.7em',
borderRadius:'0.8em',
fontStyle:'normal'},

icon:{
width:'1.875em',
height:'1.875em'},

title:{
fontSize:12}});exports.default=



TabBarItem;