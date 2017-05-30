





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ProgressView=function(_Component){_inherits(ProgressView,_Component);function ProgressView(){_classCallCheck(this,ProgressView);return _possibleConstructorReturn(this,(ProgressView.__proto__||Object.getPrototypeOf(ProgressView)).apply(this,arguments));}_createClass(ProgressView,[{key:'render',value:function render()

{

var specificStyle={
progressTint:{},
progressTrack:{}};


if(this.props.trackImage){
specificStyle.progressTrack.background='url('+this.props.trackImage.uri+') no-repeat 0 0';
specificStyle.progressTrack.backgroundSize='100% 100%';
}

if(this.props.trackTintColor){
specificStyle.progressTrack.background=this.props.trackTintColor;
}

if(this.props.progressViewStyle=='bar'){
specificStyle.progressTrack.background='transparent';
}

if(this.props.progressImage){
specificStyle.progressTint.background='url('+this.props.progressImage.uri+') no-repeat 0 0';
specificStyle.progressTint.backgroundSize='100% 100%';
}

if(this.props.progressTintColor){
specificStyle.progressTint.background=this.props.progressTintColor;
}


var progress=this.props.progress;
if(progress>=1){
progress=1;
}else if(progress<=0){
progress=0;
}

specificStyle.progressTint.width=100*progress+'%';

specificStyle=_ReactStyleSheet2.default.create(specificStyle);

return(
_react2.default.createElement(_ReactView2.default,{style:[styles.progressView,this.props.style]},
_react2.default.createElement(_ReactView2.default,{style:[styles.progressTrack,specificStyle.progressTrack]},
_react2.default.createElement(_ReactView2.default,{style:[styles.progressTint,specificStyle.progressTint]}))));



}}]);return ProgressView;}(_react.Component);
;

var styles=_ReactStyleSheet2.default.create({
progressView:{
display:'block',
height:'2px',
width:'100%'},

progressTint:{
position:'absolute',
left:0,
width:0,
height:'100%',
background:'#0079fe'},

progressTrack:{
position:'relative',
width:'100%',
height:'100%',
background:'#b4b4b4'}});



_reactMixin2.default.onClass(ProgressView,_NativeMethodsMixin.Mixin);
(0,_autobindDecorator2.default)(ProgressView);
ProgressView.isReactNativeComponent=true;exports.default=

ProgressView;