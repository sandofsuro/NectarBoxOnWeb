





'use strict';

var _UIManager=require('./UIManager.web');var _UIManager2=_interopRequireDefault(_UIManager);

var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _setNativeProps2=require('./setNativeProps.web');var _setNativeProps3=_interopRequireDefault(_setNativeProps2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NativeMethodsMixin={

















measure:function measure(callback){
_UIManager2.default.measure(
_reactDom2.default.findDOMNode(this),
mountSafeCallback(this,callback));

},









measureLayout:function measureLayout(relativeToNativeNode,onSuccess,onFail){
_UIManager2.default.measureLayout(
_reactDom2.default.findDOMNode(this),
relativeToNativeNode,
mountSafeCallback(this,onFail),
mountSafeCallback(this,onSuccess));

},







setNativeProps:function setNativeProps(nativeProps){
(0,_setNativeProps3.default)(_reactDom2.default.findDOMNode(this),nativeProps,this._reactInternalInstance);
},





focus:function focus(){
_reactDom2.default.findDOMNode(this).focus();
},




blur:function blur(){
_reactDom2.default.findDOMNode(this).blur();
}};






var mountSafeCallback=function mountSafeCallback(context,callback){
return function(){
if(!callback||context.isMounted&&!context.isMounted()){
return;
}
return callback.apply(context,arguments);
};
};

module.exports={Mixin:NativeMethodsMixin};