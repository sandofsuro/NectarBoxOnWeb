








'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactNavigatorBreadcrumbNavigationBarStyles=require('./NavigatorBreadcrumbNavigationBarStyles.web');var _ReactNavigatorBreadcrumbNavigationBarStyles2=_interopRequireDefault(_ReactNavigatorBreadcrumbNavigationBarStyles);
var _ReactNavigatorNavigationBarStylesAndroid=require('./NavigatorNavigationBarStylesAndroid');var _ReactNavigatorNavigationBarStylesAndroid2=_interopRequireDefault(_ReactNavigatorNavigationBarStylesAndroid);
var _ReactNavigatorNavigationBarStylesIOS=require('./NavigatorNavigationBarStylesIOS');var _ReactNavigatorNavigationBarStylesIOS2=_interopRequireDefault(_ReactNavigatorNavigationBarStylesIOS);
var _ReactPlatform=require('../Platform/Platform.web');var _ReactPlatform2=_interopRequireDefault(_ReactPlatform);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _immutable=require('immutable');
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Interpolators=_ReactNavigatorBreadcrumbNavigationBarStyles2.default.Interpolators;
var NavigatorNavigationBarStyles=_ReactPlatform2.default.OS==='android'?_ReactNavigatorNavigationBarStylesAndroid2.default:_ReactNavigatorNavigationBarStylesIOS2.default;





var CRUMB_PROPS=Interpolators.map(function(){return{style:{}};});
var ICON_PROPS=Interpolators.map(function(){return{style:{}};});
var SEPARATOR_PROPS=Interpolators.map(function(){return{style:{}};});
var TITLE_PROPS=Interpolators.map(function(){return{style:{}};});
var RIGHT_BUTTON_PROPS=Interpolators.map(function(){return{style:{}};});


var navStatePresentedIndex=function navStatePresentedIndex(navState){
if(navState.presentedIndex!==undefined){
return navState.presentedIndex;
}

return navState.observedTopOfStack;
};









var initStyle=function initStyle(index,presentedIndex){
return index===presentedIndex?_ReactNavigatorBreadcrumbNavigationBarStyles2.default.Center[index]:
index<presentedIndex?_ReactNavigatorBreadcrumbNavigationBarStyles2.default.Left[index]:
_ReactNavigatorBreadcrumbNavigationBarStyles2.default.Right[index];
};var

NavigatorBreadcrumbNavigationBar=function(_Component){_inherits(NavigatorBreadcrumbNavigationBar,_Component);function NavigatorBreadcrumbNavigationBar(){_classCallCheck(this,NavigatorBreadcrumbNavigationBar);return _possibleConstructorReturn(this,(NavigatorBreadcrumbNavigationBar.__proto__||Object.getPrototypeOf(NavigatorBreadcrumbNavigationBar)).apply(this,arguments));}_createClass(NavigatorBreadcrumbNavigationBar,[{key:'_updateIndexProgress',value:function _updateIndexProgress(
























progress,index,fromIndex,toIndex){
var amount=toIndex>fromIndex?progress:1-progress;
var oldDistToCenter=index-fromIndex;
var newDistToCenter=index-toIndex;
var interpolate;
(0,_invariant2.default)(
Interpolators[index],
'Cannot find breadcrumb interpolators for '+index);

if(oldDistToCenter>0&&newDistToCenter===0||
newDistToCenter>0&&oldDistToCenter===0){
interpolate=Interpolators[index].RightToCenter;
}else if(oldDistToCenter<0&&newDistToCenter===0||
newDistToCenter<0&&oldDistToCenter===0){
interpolate=Interpolators[index].CenterToLeft;
}else if(oldDistToCenter===newDistToCenter){
interpolate=Interpolators[index].RightToCenter;
}else{
interpolate=Interpolators[index].RightToLeft;
}

if(interpolate.Crumb(CRUMB_PROPS[index].style,amount)){
this._setPropsIfExists('crumb_'+index,CRUMB_PROPS[index]);
}
if(interpolate.Icon(ICON_PROPS[index].style,amount)){
this._setPropsIfExists('icon_'+index,ICON_PROPS[index]);
}
if(interpolate.Separator(SEPARATOR_PROPS[index].style,amount)){
this._setPropsIfExists('separator_'+index,SEPARATOR_PROPS[index]);
}
if(interpolate.Title(TITLE_PROPS[index].style,amount)){
this._setPropsIfExists('title_'+index,TITLE_PROPS[index]);
}
var right=this.refs['right_'+index];
if(right&&
interpolate.RightItem(RIGHT_BUTTON_PROPS[index].style,amount)){
right.setNativeProps(RIGHT_BUTTON_PROPS[index]);
}
}},{key:'updateProgress',value:function updateProgress(

progress,fromIndex,toIndex){
var max=Math.max(fromIndex,toIndex);
var min=Math.min(fromIndex,toIndex);
for(var index=min;index<=max;index++){
this._updateIndexProgress(progress,index,fromIndex,toIndex);
}
}},{key:'onAnimationStart',value:function onAnimationStart(

fromIndex,toIndex){
var max=Math.max(fromIndex,toIndex);
var min=Math.min(fromIndex,toIndex);
for(var index=min;index<=max;index++){
this._setRenderViewsToHardwareTextureAndroid(index,true);
}
}},{key:'onAnimationEnd',value:function onAnimationEnd()

{
var max=this.props.navState.routeStack.length-1;
for(var index=0;index<=max;index++){
this._setRenderViewsToHardwareTextureAndroid(index,false);
}
}},{key:'_setRenderViewsToHardwareTextureAndroid',value:function _setRenderViewsToHardwareTextureAndroid(

index,renderToHardwareTexture){
var props={
renderToHardwareTextureAndroid:renderToHardwareTexture};


this._setPropsIfExists('icon_'+index,props);
this._setPropsIfExists('separator_'+index,props);
this._setPropsIfExists('title_'+index,props);
this._setPropsIfExists('right_'+index,props);
}},{key:'componentWillMount',value:function componentWillMount()

{
this._descriptors={
crumb:new _immutable.Map(),
title:new _immutable.Map(),
right:new _immutable.Map()};

}},{key:'render',value:function render()

{
var navState=this.props.navState;
var icons=navState&&navState.routeStack.map(this._getBreadcrumb);
var titles=navState.routeStack.map(this._getTitle);
var buttons=navState.routeStack.map(this._getRightButton);
return(
_react2.default.createElement(_ReactView2.default,{style:[styles.breadCrumbContainer,this.props.style]},
titles,
icons,
buttons));


}},{key:'_getBreadcrumb',value:function _getBreadcrumb(

route,index){
if(this._descriptors.crumb.has(route)){
return this._descriptors.crumb.get(route);
}

var navBarRouteMapper=this.props.routeMapper;
var firstStyles=initStyle(index,navStatePresentedIndex(this.props.navState));

var breadcrumbDescriptor=
_react2.default.createElement(_ReactView2.default,{ref:'crumb_'+index,style:firstStyles.Crumb},
_react2.default.createElement(_ReactView2.default,{ref:'icon_'+index,style:firstStyles.Icon},
navBarRouteMapper.iconForRoute(route,this.props.navigator)),

_react2.default.createElement(_ReactView2.default,{ref:'separator_'+index,style:firstStyles.Separator},
navBarRouteMapper.separatorForRoute(route,this.props.navigator)));




this._descriptors.crumb=this._descriptors.crumb.set(route,breadcrumbDescriptor);
return breadcrumbDescriptor;
}},{key:'_getTitle',value:function _getTitle(

route,index){
if(this._descriptors.title.has(route)){
return this._descriptors.title.get(route);
}

var titleContent=this.props.routeMapper.titleContentForRoute(
this.props.navState.routeStack[index],
this.props.navigator);

var firstStyles=initStyle(index,navStatePresentedIndex(this.props.navState));

var titleDescriptor=
_react2.default.createElement(_ReactView2.default,{ref:'title_'+index,style:firstStyles.Title},
titleContent);


this._descriptors.title=this._descriptors.title.set(route,titleDescriptor);
return titleDescriptor;
}},{key:'_getRightButton',value:function _getRightButton(

route,index){
if(this._descriptors.right.has(route)){
return this._descriptors.right.get(route);
}
var rightContent=this.props.routeMapper.rightContentForRoute(
this.props.navState.routeStack[index],
this.props.navigator);

if(!rightContent){
this._descriptors.right=this._descriptors.right.set(route,null);
return null;
}
var firstStyles=initStyle(index,navStatePresentedIndex(this.props.navState));
var rightButtonDescriptor=
_react2.default.createElement(_ReactView2.default,{ref:'right_'+index,style:firstStyles.RightItem},
rightContent);


this._descriptors.right=this._descriptors.right.set(route,rightButtonDescriptor);
return rightButtonDescriptor;
}},{key:'_setPropsIfExists',value:function _setPropsIfExists(

ref,props){
var ref=this.refs[ref];
ref&&ref.setNativeProps(props);
}}]);return NavigatorBreadcrumbNavigationBar;}(_react.Component);NavigatorBreadcrumbNavigationBar.propTypes={navigator:_react.PropTypes.shape({push:_react.PropTypes.func,pop:_react.PropTypes.func,replace:_react.PropTypes.func,popToRoute:_react.PropTypes.func,popToTop:_react.PropTypes.func}),routeMapper:_react.PropTypes.shape({rightContentForRoute:_react.PropTypes.func,titleContentForRoute:_react.PropTypes.func,iconForRoute:_react.PropTypes.func}),navState:_react2.default.PropTypes.shape({routeStack:_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),presentedIndex:_react2.default.PropTypes.number}),style:_ReactView2.default.propTypes.style};NavigatorBreadcrumbNavigationBar.statics={Styles:_ReactNavigatorBreadcrumbNavigationBarStyles2.default};

;

var styles=_ReactStyleSheet2.default.create({
breadCrumbContainer:{
overflow:'hidden',
position:'absolute',
height:NavigatorNavigationBarStyles.General.TotalNavHeight,
top:0,
left:0,
right:0}});



(0,_autobindDecorator2.default)(NavigatorBreadcrumbNavigationBar);

module.exports=NavigatorBreadcrumbNavigationBar;