





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactAnimated=require('../Animated/Animated.web');var _ReactAnimated2=_interopRequireDefault(_ReactAnimated);
var _ReactPanResponder=require('../PanResponder/PanResponder.web');var _ReactPanResponder2=_interopRequireDefault(_ReactPanResponder);
var _ReactDimensions=require('../Dimensions/Dimensions.web');var _ReactDimensions2=_interopRequireDefault(_ReactDimensions);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var DEVICE_WIDTH=parseFloat(_ReactDimensions2.default.get('window').width);
var THRESHOLD=DEVICE_WIDTH/2;
var VX_MAX=0.1;

var IDLE='Idle';
var DRAGGING='Dragging';
var SETTLING='Settling';var

DrawerLayout=function(_Component){_inherits(DrawerLayout,_Component);function DrawerLayout(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerLayout);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerLayout.__proto__||Object.getPrototypeOf(DrawerLayout)).call.apply(_ref,[this].concat(args))),_this),_this.


























state={
openValue:new _ReactAnimated2.default.Value(0)},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerLayout,[{key:'componentWillMount',value:function componentWillMount()


{var _this2=this;var
openValue=this.state.openValue;

openValue.addListener(function(_ref2){var value=_ref2.value;
_this2._lastOpenValue=value;
_this2.props.onDrawerSlide&&_this2.props.onDrawerSlide({nativeEvent:{offset:value}});
});

this._panResponder=_ReactPanResponder2.default.create({
onMoveShouldSetPanResponder:this._shouldSetPanResponder,
onPanResponderGrant:this._panResponderGrant,
onPanResponderMove:this._panResponderMove,
onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){return true;},
onPanResponderRelease:this._panResponderRelease,
onPanResponderTerminate:function onPanResponderTerminate(evt,gestureState){}});

}},{key:'render',value:function render()

{var
openValue=this.state.openValue;var _props=
this.props,drawerPosition=_props.drawerPosition,drawerWidth=_props.drawerWidth;
var dynamicDrawerStyles={};
dynamicDrawerStyles[drawerPosition]=0;
dynamicDrawerStyles.width=drawerWidth;


var outputRange=void 0;

if(drawerPosition==='left'){
outputRange=[-drawerWidth,0];
}else{
outputRange=[drawerWidth,0];
}

var drawerTranslateX=openValue.interpolate({
inputRange:[0,1],
outputRange:outputRange,
extrapolate:'clamp'});

var animatedDrawerStyles={transform:[{translateX:drawerTranslateX}]};




var overlayOpacity=openValue.interpolate({
inputRange:[0,1],
outputRange:[0,0.7],
extrapolate:'clamp'});

var animatedOverlayStyles={opacity:overlayOpacity};

return(
_react2.default.createElement(_ReactView2.default,_extends({style:{flex:1,backgroundColor:'transparent'}},this._panResponder.panHandlers),
_react2.default.createElement(_ReactAnimated2.default.View,{style:styles.main},
this.props.children),


_react2.default.createElement(_ReactAnimated2.default.View,{style:[styles.overlay,animatedOverlayStyles],onClick:this.close}),
_react2.default.createElement(_ReactAnimated2.default.View,{style:[styles.drawer,dynamicDrawerStyles,animatedDrawerStyles]},
this.props.renderNavigationView())));



}},{key:'_emitStateChanged',value:function _emitStateChanged(

newState){
this.props.onDrawerStateChanged&&this.props.onDrawerStateChanged(newState);
}},{key:'open',value:function open()

{var _this3=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
this._emitStateChanged(SETTLING);
_ReactAnimated2.default.spring(this.state.openValue,_extends({toValue:1,bounciness:0,restSpeedThreshold:0.1},options)).start(function(){
_this3.props.onDrawerOpen&&_this3.props.onDrawerOpen();
_this3._emitStateChanged(IDLE);
});
}},{key:'close',value:function close()

{var _this4=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
this._emitStateChanged(SETTLING);
_ReactAnimated2.default.spring(this.state.openValue,_extends({toValue:0,bounciness:0,restSpeedThreshold:1},options)).start(function(){
_this4.props.onDrawerClose&&_this4.props.onDrawerClose();
_this4._emitStateChanged(IDLE);
});
}},{key:'_handleDrawerOpen',value:function _handleDrawerOpen()

{
this.props.onDrawerOpen&&this.props.onDrawerOpen();
}},{key:'_handleDrawerClose',value:function _handleDrawerClose()

{
this.props.onDrawerClose&&this.props.onDrawerClose();
}},{key:'_shouldSetPanResponder',value:function _shouldSetPanResponder(

e,_ref3){var moveX=_ref3.moveX,dx=_ref3.dx,dy=_ref3.dy;var
drawerPosition=this.props.drawerPosition;

if(drawerPosition==='left'){
var overlayArea=DEVICE_WIDTH-(DEVICE_WIDTH-this.props.drawerWidth);

if(this._lastOpenValue===1){
if(dx<0&&Math.abs(dx)>Math.abs(dy)*3||moveX>overlayArea){
this._isClosing=true;
this._closingAnchorValue=this._getOpenValueForX(moveX);
return true;
}
}else{
if(moveX<=35&&dx>0){
this._isClosing=false;
return true;
}else{
return false;
}
}
}else{
var _overlayArea=DEVICE_WIDTH-this.props.drawerWidth;

if(this._lastOpenValue===1){
if(dx>0&&Math.abs(dx)>Math.abs(dy)*3||moveX<_overlayArea){
this._isClosing=true;
this._closingAnchorValue=this._getOpenValueForX(moveX);
return true;
}
}else{
if(moveX>=DEVICE_WIDTH-35&&dx<0){
this._isClosing=false;
return true;
}else{
return false;
}
}
}
}},{key:'_panResponderGrant',value:function _panResponderGrant()

{
this._emitStateChanged(DRAGGING);
}},{key:'_panResponderMove',value:function _panResponderMove(

e,_ref4){var moveX=_ref4.moveX;
var openValue=this._getOpenValueForX(moveX);

if(this._isClosing){
openValue=1-(this._closingAnchorValue-openValue);
}

if(openValue>1){
openValue=1;
}else if(openValue<0){
openValue=0;
}

this.state.openValue.setValue(openValue);
}},{key:'_panResponderRelease',value:function _panResponderRelease(

e,_ref5){var moveX=_ref5.moveX,vx=_ref5.vx;var
drawerPosition=this.props.drawerPosition;

var previouslyOpen=this._isClosing;
var isWithinVelocityThreshold=vx<VX_MAX&&vx>-VX_MAX;

if(drawerPosition==='left'){
if(vx>0&&moveX>THRESHOLD||vx>=VX_MAX||isWithinVelocityThreshold&&previouslyOpen&&moveX>THRESHOLD){
this.open({velocity:vx});
}else if(vx<0&&moveX<THRESHOLD||vx<-VX_MAX||isWithinVelocityThreshold&&!previouslyOpen){
this.close({velocity:vx});
}else if(previouslyOpen){
this.open();
}else{
this.close();
}
}else{
if(vx<0&&moveX<THRESHOLD||vx<=-VX_MAX||isWithinVelocityThreshold&&previouslyOpen&&moveX<THRESHOLD){
this.open({velocity:-1*vx});
}else if(vx>0&&moveX>THRESHOLD||vx>VX_MAX||isWithinVelocityThreshold&&!previouslyOpen){
this.close({velocity:-1*vx});
}else if(previouslyOpen){
this.open();
}else{
this.close();
}
}
}},{key:'_getOpenValueForX',value:function _getOpenValueForX(

x){var _props2=
this.props,drawerPosition=_props2.drawerPosition,drawerWidth=_props2.drawerWidth;

if(drawerPosition==='left'){
return x/drawerWidth;
}else if(drawerPosition==='right'){
return(DEVICE_WIDTH-x)/drawerWidth;
}
}}]);return DrawerLayout;}(_react.Component);DrawerLayout.positions={Left:'left',Right:'right'};DrawerLayout.defaultProps={drawerWidth:0,drawerPosition:'left'};DrawerLayout.propTypes={drawerWidth:_react.PropTypes.number.isRequired,drawerPosition:_react.PropTypes.oneOf(['left','right']).isRequired,renderNavigationView:_react.PropTypes.func.isRequired,onDrawerSlide:_react.PropTypes.func,onDrawerStateChanged:_react.PropTypes.func,onDrawerOpen:_react.PropTypes.func,onDrawerClose:_react.PropTypes.func,keyboardDismissMode:_react.PropTypes.oneOf(['none','on-drag'])};


var styles=_ReactStyleSheet2.default.create({
drawer:{
position:'absolute',
top:0,
bottom:0},

main:{
flex:1},

overlay:{
backgroundColor:'#000',
position:'absolute',
top:0,
left:0,
bottom:0,
right:0}});




_reactMixin2.default.onClass(DrawerLayout,_NativeMethodsMixin.Mixin);
(0,_autobindDecorator2.default)(DrawerLayout);

DrawerLayout.isReactNativeComponent=true;exports.default=

DrawerLayout;