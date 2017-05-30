








'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactNavigatorNavigationBarStylesAndroid=require('./NavigatorNavigationBarStylesAndroid');var _ReactNavigatorNavigationBarStylesAndroid2=_interopRequireDefault(_ReactNavigatorNavigationBarStylesAndroid);
var _ReactNavigatorNavigationBarStylesIOS=require('./NavigatorNavigationBarStylesIOS');var _ReactNavigatorNavigationBarStylesIOS2=_interopRequireDefault(_ReactNavigatorNavigationBarStylesIOS);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);

var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _immutable=require('immutable');
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var COMPONENT_NAMES=['Title','LeftButton','RightButton'];

var NavigatorNavigationBarStyles=_ReactStyleSheet2.default.OS==='android'?_ReactNavigatorNavigationBarStylesAndroid2.default:_ReactNavigatorNavigationBarStylesIOS2.default;


var navStatePresentedIndex=function navStatePresentedIndex(navState){
if(navState.presentedIndex!==undefined){
return navState.presentedIndex;
}

return navState.observedTopOfStack;
};var

NavigatorNavigationBar=function(_Component){_inherits(NavigatorNavigationBar,_Component);

function NavigatorNavigationBar(props){_classCallCheck(this,NavigatorNavigationBar);var _this=_possibleConstructorReturn(this,(NavigatorNavigationBar.__proto__||Object.getPrototypeOf(NavigatorNavigationBar)).call(this,
props));

_this._components={};
_this._descriptors={};

COMPONENT_NAMES.forEach(function(componentName){
_this._components[componentName]=new _immutable.Map();
_this._descriptors[componentName]=new _immutable.Map();
});return _this;

}_createClass(NavigatorNavigationBar,[{key:'_getReusableProps',value:function _getReusableProps(



























componentName,
index)
{
if(!this._reusableProps){
this._reusableProps={};
}
var propStack=this._reusableProps[componentName];
if(!propStack){
propStack=this._reusableProps[componentName]=[];
}
var props=propStack[index];
if(!props){
props=propStack[index]={style:{}};
}
return props;
}},{key:'_updateIndexProgress',value:function _updateIndexProgress(


progress,
index,
fromIndex,
toIndex)
{
var amount=toIndex>fromIndex?progress:1-progress;
var oldDistToCenter=index-fromIndex;
var newDistToCenter=index-toIndex;
var interpolate;
if(oldDistToCenter>0&&newDistToCenter===0||
newDistToCenter>0&&oldDistToCenter===0){
interpolate=this.props.navigationStyles.Interpolators.RightToCenter;
}else if(oldDistToCenter<0&&newDistToCenter===0||
newDistToCenter<0&&oldDistToCenter===0){
interpolate=this.props.navigationStyles.Interpolators.CenterToLeft;
}else if(oldDistToCenter===newDistToCenter){
interpolate=this.props.navigationStyles.Interpolators.RightToCenter;
}else{
interpolate=this.props.navigationStyles.Interpolators.RightToLeft;
}

COMPONENT_NAMES.forEach(function(componentName){
var component=this._components[componentName].get(this.props.navState.routeStack[index]);
var props=this._getReusableProps(componentName,index);
if(component&&interpolate[componentName](props.style,amount)){
component.setNativeProps(props);
}
},this);
}},{key:'updateProgress',value:function updateProgress(


progress,
fromIndex,
toIndex)
{
var max=Math.max(fromIndex,toIndex);
var min=Math.min(fromIndex,toIndex);
for(var index=min;index<=max;index++){
this._updateIndexProgress(progress,index,fromIndex,toIndex);
}
}},{key:'render',value:function render()

{
var navBarStyle={
height:this.props.navigationStyles.General.TotalNavHeight};

var navState=this.props.navState;
var components=COMPONENT_NAMES.map(function(componentName){
return navState.routeStack.map(
this._getComponent.bind(this,componentName));

},this);

return(
_react2.default.createElement(_ReactView2.default,{style:[styles.navBarContainer,navBarStyle,this.props.style]},
components));


}},{key:'_getComponent',value:function _getComponent(


componentName,
route,
index)
{var _this2=this;
if(this._descriptors[componentName].includes(route)){
return this._descriptors[componentName].get(route);
}

var rendered=null;

var content=this.props.routeMapper[componentName](
this.props.navState.routeStack[index],
this.props.navigator,
index,
this.props.navState);

if(!content){
return null;
}

var initialStage=index===navStatePresentedIndex(this.props.navState)?
this.props.navigationStyles.Stages.Center:
this.props.navigationStyles.Stages.Left;
rendered=
_react2.default.createElement(_ReactView2.default,{
ref:function ref(_ref){
_this2._components[componentName]=_this2._components[componentName].set(route,_ref);
},
style:initialStage[componentName]},
content);



this._descriptors[componentName]=this._descriptors[componentName].set(route,rendered);
return rendered;
}}]);return NavigatorNavigationBar;}(_react.Component);NavigatorNavigationBar.propTypes={navigator:_react.PropTypes.object,routeMapper:_react.PropTypes.shape({Title:_react.PropTypes.func.isRequired,LeftButton:_react.PropTypes.func.isRequired,RightButton:_react.PropTypes.func.isRequired}).isRequired,navState:_react.PropTypes.shape({routeStack:_react.PropTypes.arrayOf(_react.PropTypes.object),presentedIndex:_react.PropTypes.number}),navigationStyles:_react.PropTypes.object,style:_ReactView2.default.propTypes.style};NavigatorNavigationBar.statics={Styles:NavigatorNavigationBarStyles,StylesAndroid:_ReactNavigatorNavigationBarStylesAndroid2.default,StylesIOS:_ReactNavigatorNavigationBarStylesIOS2.default};NavigatorNavigationBar.defaultProps={navigationStyles:NavigatorNavigationBarStyles};

;


var styles=_ReactStyleSheet2.default.create({
navBarContainer:{
position:'absolute',
top:0,
left:0,
right:0,
backgroundColor:'transparent'}});



(0,_autobindDecorator2.default)(NavigatorNavigationBar);

module.exports=NavigatorNavigationBar;