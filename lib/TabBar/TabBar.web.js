





'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _TabBarItem=require('./TabBarItem.web');var _TabBarItem2=_interopRequireDefault(_TabBarItem);
var _TabBarContents=require('./TabBarContents.web');var _TabBarContents2=_interopRequireDefault(_TabBarContents);
var _objectAssign=require('object-assign');var _objectAssign2=_interopRequireDefault(_objectAssign);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TabBar=_react2.default.createClass({displayName:'TabBar',
getInitialState:function getInitialState(){
return{
selectedIndex:0};

},

statics:{
Item:_TabBarItem2.default},


propTypes:{
style:_react2.default.PropTypes.object,



tintColor:_react2.default.PropTypes.string,



barTintColor:_react2.default.PropTypes.string,

clientHeight:_react2.default.PropTypes.number},


getStyles:function getStyles(){
return _ReactStyleSheet2.default.create({
container:{
width:'100%',
height:this.props.clientHeight||document.documentElement.clientHeight,
position:'relative',
overflow:'hidden'},

content:{
width:'100%',
height:'100%'},

bar:{
width:'100%',
position:'absolute',
padding:0,
margin:0,
listStyle:'none',
left:0,
bottom:0,

backgroundColor:'rgba(250,250,250,.96)',
display:'table'}});


},

handleTouchTap:function handleTouchTap(index){
this.setState({
selectedIndex:index});

},

render:function render(){
var self=this;
var styles=self.getStyles();
var barStyle=(0,_objectAssign2.default)(styles.bar,this.props.style||{},this.props.barTintColor?{
backgroundColor:this.props.barTintColor}:
{});

var tabContent=[];

var tabs=_react2.default.Children.map(this.props.children,function(tab,
index){
if(tab.type.displayName==='TabBarItem'){
if(tab.props.children){
tabContent.push(_react2.default.createElement(_TabBarContents2.default,{
key:index,
selected:self.state.selectedIndex===index},
tab.props.children));
}else{
tabContent.push(undefined);
}

return _react2.default.cloneElement(tab,{
index:index,
selected:self.state.selectedIndex===index,
selectedColor:self.props.tintColor,
handleTouchTap:self.handleTouchTap});


}else{
var type=tab.type.displayName||tab.type;
throw'Tabbar only accepts TabBar.Item Components as children. Found '+type+' as child number '+(index+1)+' of Tabbar';
}
});

return(
_react2.default.createElement(_ReactView2.default,{style:styles.container},
_react2.default.createElement(_ReactView2.default,{style:styles.content},tabContent),
_react2.default.createElement('ul',{style:barStyle},
tabs)));



}});


TabBar.isReactNativeComponent=true;exports.default=

TabBar;