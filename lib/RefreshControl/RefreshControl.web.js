







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactActivityIndicator=require('../ActivityIndicator/ActivityIndicator.web');var _ReactActivityIndicator2=_interopRequireDefault(_ReactActivityIndicator);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var RefreshLayoutConsts={SIZE:{}};var

RefreshControl=function(_Component){_inherits(RefreshControl,_Component);function RefreshControl(){_classCallCheck(this,RefreshControl);return _possibleConstructorReturn(this,(RefreshControl.__proto__||Object.getPrototypeOf(RefreshControl)).apply(this,arguments));}_createClass(RefreshControl,[{key:'componentDidMount',value:function componentDidMount()



{
this._lastNativeRefreshing=this.props.refreshing;
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){



if(this.props.refreshing!==prevProps.refreshing){
this._lastNativeRefreshing=this.props.refreshing;
}else if(this.props.refreshing!==this._lastNativeRefreshing){
this._nativeRef.setNativeProps({refreshing:this.props.refreshing});
this._lastNativeRefreshing=this.props.refreshing;
}
}},{key:'render',value:function render()

{var _this2=this;

return(
_react2.default.createElement(_ReactActivityIndicator2.default,_extends({},
this.props,{
ref:function ref(_ref){return _this2._nativeRef=_ref;},
onRefresh:this._onRefresh})));


}},{key:'_onRefresh',value:function _onRefresh()

{
this._lastNativeRefreshing=true;

this.props.onRefresh&&this.props.onRefresh();



this.forceUpdate();
}}]);return RefreshControl;}(_react.Component);RefreshControl.SIZE=RefreshLayoutConsts.SIZE;


_reactMixin2.default.onClass(RefreshControl,_NativeMethodsMixin.Mixin);
(0,_autobindDecorator2.default)(RefreshControl);
RefreshControl.isReactNativeComponent=true;exports.default=

RefreshControl;