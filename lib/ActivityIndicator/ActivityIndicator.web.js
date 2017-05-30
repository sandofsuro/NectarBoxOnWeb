








'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _appendVendorPrefix=require('domkit/appendVendorPrefix');var _appendVendorPrefix2=_interopRequireDefault(_appendVendorPrefix);
var _insertKeyframesRule=require('domkit/insertKeyframesRule');var _insertKeyframesRule2=_interopRequireDefault(_insertKeyframesRule);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var keyframes={
'50%':{
opacity:0.3},

'100%':{
opacity:1}};



var GRAY='#999999';

var animationName=(0,_insertKeyframesRule2.default)(keyframes);var

ActivityIndicator=function(_Component){_inherits(ActivityIndicator,_Component);function ActivityIndicator(){_classCallCheck(this,ActivityIndicator);return _possibleConstructorReturn(this,(ActivityIndicator.__proto__||Object.getPrototypeOf(ActivityIndicator)).apply(this,arguments));}_createClass(ActivityIndicator,[{key:'getAnimationStyle',value:function getAnimationStyle(





























i){
var animation=[animationName,'1.2s',i*0.12+'s','infinite','ease-in-out'].join(' ');
var animationFillMode='both';

return{
animation:animation,
animationFillMode:animationFillMode};

}},{key:'getLineStyle',value:function getLineStyle(





i,lines){
return{
backgroundColor:this.props.color,
position:'absolute',

top:-3,
left:-1,
transform:'rotate('+~~(360/lines*i)+'deg) translate(0, -'+(this.props.size==='large'?12:7)+'px)'};

}},{key:'getStyle',value:function getStyle(





i,lines){
var sizeLineStyle=this.props.size==='large'?styles.sizeLargeLine:styles.sizeSmallLine;
return(0,_appendVendorPrefix2.default)(
this.getAnimationStyle(i),
this.getLineStyle(i,lines),
sizeLineStyle);

}},{key:'render',value:function render()

{
var lines=[];
var sizeContainerStyle=this.props.size==='large'?styles.sizeLargeContainer:styles.sizeSmallContainer;

if(this.props.animating){
for(var i=1;i<=12;i++){
lines.push(_react2.default.createElement(_ReactView2.default,{key:i,style:this.getStyle(i,12)}));
}
}

return(
_react2.default.createElement(_ReactView2.default,{style:[styles.container,sizeContainerStyle,this.props.style]},
_react2.default.createElement(_ReactView2.default,null,
lines)));



}}]);return ActivityIndicator;}(_react.Component);ActivityIndicator.propTypes={animating:_react.PropTypes.bool,color:_react.PropTypes.string,size:_react.PropTypes.oneOf(['small','large'])};ActivityIndicator.defaultProps={animating:true,color:GRAY,size:'small'};


var styles=_ReactStyleSheet2.default.create({
container:{
position:'relative',
fontSize:0,
alignItems:'center',
justifyContent:'center'},

sizeSmallContainer:{
width:20,
height:20},

sizeLargeContainer:{
width:36,
height:36},

sizeSmallLine:{
width:2,
height:5,
borderRadius:2},

sizeLargeLine:{
width:3,
height:9,
borderRadius:3}});



_reactMixin2.default.onClass(ActivityIndicator,_NativeMethodsMixin.Mixin);

ActivityIndicator.isReactNativeComponent=true;exports.default=

ActivityIndicator;