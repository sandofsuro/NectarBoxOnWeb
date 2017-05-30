




'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TabBarContents=_react2.default.createClass({displayName:'TabBarContents',

getInitialState:function getInitialState(){
return{
hasBeenSelected:false};

},

componentWillMount:function componentWillMount(){
if(this.props.selected){
this.setState({
hasBeenSelected:true});

}
},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){
if(this.state.hasBeenSelected||nextProps.selected){
this.setState({
hasBeenSelected:true});

}
},

render:function render(){

var styles=_ReactStyleSheet2.default.create({
'display':'none',
'width':'100%',
'height':'100%',
'position':'relative'});


if(this.props.selected){
delete styles.display;
}

var tabContents=null;



if(this.state.hasBeenSelected){
tabContents=_react2.default.createElement(_ReactView2.default,{style:styles},
this.props.children);

}

return tabContents;
}});exports.default=




TabBarContents;