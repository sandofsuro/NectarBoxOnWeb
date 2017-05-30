






'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _objectAssign=require('object-assign');var _objectAssign2=_interopRequireDefault(_objectAssign);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactAnimated=require('../Animated/Animated.web');var _ReactAnimated2=_interopRequireDefault(_ReactAnimated);
var _ReactDimensions=require('../Dimensions/Dimensions.web');var _ReactDimensions2=_interopRequireDefault(_ReactDimensions);
var _ReactPanResponder=require('../PanResponder/PanResponder.web');var _ReactPanResponder2=_interopRequireDefault(_ReactPanResponder);
var _ReactDismissKeyboard=require('../Utilties/dismissKeyboard.web');var _ReactDismissKeyboard2=_interopRequireDefault(_ReactDismissKeyboard);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var deviceSize=_ReactDimensions2.default.get('window');
var VIEWPAGER_REF='viewpager';var

ViewPager=function(_React$Component){_inherits(ViewPager,_React$Component);function ViewPager(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ViewPager);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ViewPager.__proto__||Object.getPrototypeOf(ViewPager)).call.apply(_ref,[this].concat(args))),_this),_this.










































state={
selectedPage:_this.props.initialPage,
pageWidth:deviceSize.width,
pageCount:_this.props.children.length,
offsetLeft:new _ReactAnimated2.default.Value(0)},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ViewPager,[{key:'getInnerViewNode',value:function getInnerViewNode()


{
return this.refs[VIEWPAGER_REF].childNodes[0];
}},{key:'componentWillMount',value:function componentWillMount()

{












this._panResponder=_ReactPanResponder2.default.create({
onStartShouldSetResponder:function onStartShouldSetResponder(){return true;},
onMoveShouldSetPanResponder:this._shouldSetPanResponder,
onPanResponderGrant:function onPanResponderGrant(){},
onPanResponderMove:this._panResponderMove,
onPanResponderTerminationRequest:function onPanResponderTerminationRequest(){return true;},
onPanResponderRelease:this._panResponderRelease,
onPanResponderTerminate:function onPanResponderTerminate(){}});

}},{key:'componentDidMount',value:function componentDidMount()

{
this.setPage(this.state.selectedPage);
}},{key:'_childrenWithOverridenStyle',value:function _childrenWithOverridenStyle()

{



return _react2.default.Children.map(this.props.children,function(child){
var style=(0,_objectAssign2.default)({},child.props.style,{width:deviceSize.width});
var newProps={
style:style,
collapsable:false};

return(0,_react.cloneElement)(child,(0,_objectAssign2.default)({},child.props,newProps));
});
}},{key:'render',value:function render()

{
var children=this._childrenWithOverridenStyle();var _state=

this.state,offsetLeft=_state.offsetLeft,pageWidth=_state.pageWidth,pageCount=_state.pageCount;
var width=pageWidth*pageCount;
var count=pageCount-1;

var translateX=offsetLeft.interpolate({
inputRange:[0,count],
outputRange:[0,-(pageWidth*count)],
extrapolate:'clamp'});


return _react2.default.createElement(_ReactView2.default,_extends({ref:VIEWPAGER_REF,
style:this.props.style},
this._panResponder.panHandlers),

_react2.default.createElement(_ReactAnimated2.default.View,{style:{
width:width,
position:'absolute',
top:0,
left:translateX,
bottom:0,
flexDirection:'row'}},

children));


}},{key:'_onPageScroll',value:function _onPageScroll(

event){
if(this.props.onPageScroll){
this.props.onPageScroll(event);
}
if(this.props.keyboardDismissMode==='on-drag'){
(0,_ReactDismissKeyboard2.default)();
}
}},{key:'_shouldSetPanResponder',value:function _shouldSetPanResponder()

{var _this2=this;
if(this._scrolling){
this.state.offsetLeft.stopAnimation(function(){
_this2._scrolling=false;
});
return false;
}

return true;
}},{key:'_panResponderMove',value:function _panResponderMove(

ev,_ref2){var dx=_ref2.dx;
var val=this.state.selectedPage+dx/this.state.pageWidth*-1;
this.state.offsetLeft.setValue(val);
}},{key:'_panResponderRelease',value:function _panResponderRelease(

ev,_ref3){var dx=_ref3.dx;var _state2=
this.state,selectedPage=_state2.selectedPage,pageWidth=_state2.pageWidth;
var range=Math.abs(dx)/pageWidth;
var threshold=1/5;

if(range>threshold){
if(dx>0){
selectedPage-=1;
}else{
selectedPage+=1;
}
}

this.setPage(selectedPage);
}},{key:'setPage',value:function setPage(

index){var _this3=this;
if(index<0){
index=0;
}else if(index>=this.state.pageCount){
index=this.state.pageCount-1;
}

this._scrolling=true;

_ReactAnimated2.default.spring(this.state.offsetLeft,{
toValue:index,
bounciness:0,
restSpeedThreshold:1}).
start(function(){

_this3._onPageScroll({
nativeEvent:{
position:index,
offset:0}});



_this3._scrolling=false;

_this3.setState({
selectedPage:index},
function(){
_this3.props.onPageSelected&&_this3.props.onPageSelected({nativeEvent:{position:index}});
});
});
}}]);return ViewPager;}(_react2.default.Component);ViewPager.propTypes={initialPage:_react.PropTypes.number,onPageScroll:_react.PropTypes.func,onPageSelected:_react.PropTypes.func,keyboardDismissMode:_react.PropTypes.oneOf(['none','on-drag'])};ViewPager.defaultProps={initialPage:0};

;

_reactMixin2.default.onClass(ViewPager,_NativeMethodsMixin.Mixin);
(0,_autobindDecorator2.default)(ViewPager);

ViewPager.isReactNativeComponent=true;exports.default=

ViewPager;