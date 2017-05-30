





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Modal=function(_Component){_inherits(Modal,_Component);function Modal(){_classCallCheck(this,Modal);return _possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments));}_createClass(Modal,[{key:'render',value:function render()
{
if(this.props.visible===false){
if(this.shown){
this.props.onDismiss&&this.props.onDismiss();
}
this.shown=false;
return null;
}

this.shown=true;

if(this.props.transparent){
var modalBackgroundColor={backgroundColor:'transparent'};
}

return(
_react2.default.createElement(_ReactView2.default,{style:[styles.modal,modalBackgroundColor]},
_react2.default.createElement(_ReactView2.default,{style:[styles.container]},
this.props.children)));



}}]);return Modal;}(_react.Component);


Modal.propTypes={
animated:_react.PropTypes.bool,
transparent:_react.PropTypes.bool,
onDismiss:_react.PropTypes.func};


var styles=_ReactStyleSheet2.default.create({
modal:{
position:'fixed',
left:0,
right:0,
bottom:0,
top:0,
backgroundColor:'#fff',
zIndex:9999},

container:{
position:'absolute',
left:0,
right:0,
bottom:0,
top:0}});



Modal.isReactNativeComponent=true;exports.default=

Modal;