







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _ReactScrollResponder=require('../ListView/ScrollResponder.web');var _ReactScrollResponder2=_interopRequireDefault(_ReactScrollResponder);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _throttle=require('domkit/throttle');var _throttle2=_interopRequireDefault(_throttle);
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SCROLLVIEW='ScrollView';
var INNERVIEW='InnerScrollView';
var CONTENT_EXT_STYLE=['padding','paddingTop','paddingBottom','paddingLeft','paddingRight'];var
















ScrollView=function(_Component){_inherits(ScrollView,_Component);function ScrollView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ScrollView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ScrollView.__proto__||Object.getPrototypeOf(ScrollView)).call.apply(_ref,[this].concat(args))),_this),_this.

state=_this.scrollResponderMixinGetInitialState(),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ScrollView,[{key:'getScrollResponder',value:function getScrollResponder()







{
return this;
}},{key:'getInnerViewNode',value:function getInnerViewNode()

{
return this.refs[INNERVIEW];
}},{key:'scrollTo',value:function scrollTo(

opts){


if(typeof opts==='number'){
opts={y:opts,x:arguments[1]};
}

this.scrollWithoutAnimationTo(opts.y,opts.x);
}},{key:'scrollWithoutAnimationTo',value:function scrollWithoutAnimationTo(

destY,destX){






this._scrollViewDom=_reactDom2.default.findDOMNode(this.refs[SCROLLVIEW]);
this._scrollViewDom.scrollTop=destY||0;
this._scrollViewDom.scrollLeft=destX||0;
}},{key:'handleScroll',value:function handleScroll(

e){

















if(!this._scrollViewDom)
this._scrollViewDom=_reactDom2.default.findDOMNode(this.refs[SCROLLVIEW]);

e.nativeEvent=e.nativeEvent||{};
e.nativeEvent.contentOffset={x:this._scrollViewDom.scrollLeft,y:this._scrollViewDom.scrollTop};

this.props.onScroll&&this.props.onScroll(e);
}},{key:'render',value:function render()

{var _props=



this.props,style=_props.style,otherProps=_objectWithoutProperties(_props,['style']);

var contentContainerExtStyle={};

if(style){
for(var i=0;i<CONTENT_EXT_STYLE.length;i++){
if(typeof style[CONTENT_EXT_STYLE[i]]==='number'){
contentContainerExtStyle[CONTENT_EXT_STYLE[i]]=style[CONTENT_EXT_STYLE[i]];
}
}
}

var contentContainerStyle=[
styles.contentContainer,
this.props.horizontal&&styles.contentContainerHorizontal,
this.props.contentContainerStyle,
contentContainerExtStyle];












var contentContainer=
_react2.default.createElement(_ReactView2.default,{
ref:INNERVIEW,
style:contentContainerStyle,
removeClippedSubviews:this.props.removeClippedSubviews,
collapsable:false},
this.props.children);


var alwaysBounceHorizontal=
this.props.alwaysBounceHorizontal!==undefined?
this.props.alwaysBounceHorizontal:
this.props.horizontal;

var alwaysBounceVertical=
this.props.alwaysBounceVertical!==undefined?
this.props.alwaysBounceVertical:
!this.props.horizontal;

var handleScroll=function handleScroll(){};
if(this.props.scrollEventThrottle&&this.props.onScroll){
handleScroll=(0,_throttle2.default)(this.handleScroll,this.props.scrollEventThrottle?1000/this.props.scrollEventThrottle:1000);
}

var props=_extends({},
otherProps,{
alwaysBounceHorizontal:alwaysBounceHorizontal,
alwaysBounceVertical:alwaysBounceVertical,
style:[
styles.base,
this.props.horizontal?styles.horizontal:null,
this.props.style],

onTouchStart:this.scrollResponderHandleTouchStart,
onTouchMove:this.scrollResponderHandleTouchMove,
onTouchEnd:this.scrollResponderHandleTouchEnd,
onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,
onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,
onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,
onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,
onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,
onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,


onScrollShouldSetResponder:handleScroll,

onScroll:function onScroll(){},
onResponderGrant:this.scrollResponderHandleResponderGrant,
onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,
onResponderTerminate:this.scrollResponderHandleTerminate,
onResponderRelease:this.scrollResponderHandleResponderRelease,
onResponderReject:this.scrollResponderHandleResponderReject});


return(
_react2.default.createElement(_ReactView2.default,_extends({},props,{ref:SCROLLVIEW}),
contentContainer));


}}]);return ScrollView;}(_react.Component);
;

var styles=_ReactStyleSheet2.default.create({
base:{
overflowX:'hidden',
overflowY:'scroll',
WebkitOverflowScrolling:'touch',
flex:1},

horizontal:{
overflowX:'scroll',
overflowY:'hidden'},

contentContainer:{
position:'absolute',
minWidth:'100%'},

contentContainerHorizontal:{
alignSelf:'flex-start',
flexDirection:'row'}});



_reactMixin2.default.onClass(ScrollView,_ReactScrollResponder2.default.Mixin);
(0,_autobindDecorator2.default)(ScrollView);

ScrollView.isReactNativeComponent=true;exports.default=

ScrollView;