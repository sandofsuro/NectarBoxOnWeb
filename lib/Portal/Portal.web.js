









'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactPlatform=require('../Platform/Platform.web');var _ReactPlatform2=_interopRequireDefault(_ReactPlatform);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var _portalRef;


var lastUsedTag=0;var













Portal=function(_Component){_inherits(Portal,_Component);function Portal(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Portal);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Portal.__proto__||Object.getPrototypeOf(Portal)).call.apply(_ref,[this].concat(args))),_this),_this.
















































state={modals:{}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Portal,[{key:'_showModal',value:function _showModal(

tag,component){


if(this._getOpenModals().length===0&&this.props.onModalVisibilityChanged){
this.props.onModalVisibilityChanged(true);
}


this.setState(function(state){
var modals=state.modals;
modals[tag]=component;
return{modals:modals};
});
}},{key:'_closeModal',value:function _closeModal(

tag){
if(!this.state.modals.hasOwnProperty(tag)){
return;
}


if(this._getOpenModals().length===1&&this.props.onModalVisibilityChanged){
this.props.onModalVisibilityChanged(false);
}


this.setState(function(state){
var modals=state.modals;
delete modals[tag];
return{modals:modals};
});
}},{key:'_getOpenModals',value:function _getOpenModals()

{
return Object.keys(this.state.modals);
}},{key:'render',value:function render()

{
_portalRef=this;
if(!this.state.modals){
return null;
}
var modals=[];
for(var tag in this.state.modals){
modals.push(this.state.modals[tag]);
}
if(modals.length===0){
return null;
}
return(
_react2.default.createElement(_ReactView2.default,{
style:styles.modalsContainer},
modals));


}}],[{key:'allocateTag',value:function allocateTag(){return'__modal_'+ ++lastUsedTag;}},{key:'showModal',value:function showModal(tag,component){if(!_portalRef){console.error('Calling showModal but no Portal has been rendered.');return;}_portalRef._showModal(tag,component);}},{key:'closeModal',value:function closeModal(tag){if(!_portalRef){console.error('Calling closeModal but no Portal has been rendered.');return;}_portalRef._closeModal(tag);}},{key:'getOpenModals',value:function getOpenModals(){if(!_portalRef){console.error('Calling getOpenModals but no Portal has been rendered.');return[];}return _portalRef._getOpenModals();}}]);return Portal;}(_react.Component);

;

var styles=_ReactStyleSheet2.default.create({
modalsContainer:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0}});



Portal.isReactNativeComponent=true;

(0,_autobindDecorator2.default)(Portal);exports.default=

Portal;