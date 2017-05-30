





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactPortal=require('../Portal/Portal.web');var _ReactPortal2=_interopRequireDefault(_ReactPortal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AppContainer=function(_Component){_inherits(AppContainer,_Component);function AppContainer(){_classCallCheck(this,AppContainer);return _possibleConstructorReturn(this,(AppContainer.__proto__||Object.getPrototypeOf(AppContainer)).apply(this,arguments));}_createClass(AppContainer,[{key:'render',value:function render()

{
var RootComponent=this.props.rootComponent;
var appView=
_react2.default.createElement(_ReactView2.default,{
ref:'main',
className:_ReactStyleSheet2.default.rootClassName,
style:styles.appContainer},
_react2.default.createElement(RootComponent,_extends({},
this.props.initialProps,{
rootTag:this.props.rootTag})),
_react2.default.createElement(_ReactPortal2.default,null));


return appView;
}}]);return AppContainer;}(_react.Component);


function renderApplication(
RootComponent,
initialProps,
rootTag)
{

_reactDom2.default.render(
_react2.default.createElement(AppContainer,{
rootComponent:RootComponent,
initialProps:initialProps,
rootTag:rootTag}),
rootTag);

}

var styles=_ReactStyleSheet2.default.create({


appContainer:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0}});exports.default=



renderApplication;