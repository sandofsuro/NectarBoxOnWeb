







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _ReactLayoutMixin=require('../Utilties/LayoutMixin');
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var View=_react2.default.createClass({displayName:'View',
mixins:[_ReactLayoutMixin.Mixin,_NativeMethodsMixin.Mixin],

propTypes:{




testID:_react.PropTypes.string,






onMoveShouldSetResponder:_react.PropTypes.func,
onResponderGrant:_react.PropTypes.func,
onResponderMove:_react.PropTypes.func,
onResponderReject:_react.PropTypes.func,
onResponderRelease:_react.PropTypes.func,
onResponderTerminate:_react.PropTypes.func,
onResponderTerminationRequest:_react.PropTypes.func,
onStartShouldSetResponder:_react.PropTypes.func,
onStartShouldSetResponderCapture:_react.PropTypes.func,










onLayout:_react.PropTypes.func,































pointerEvents:_react.PropTypes.oneOf([
'box-none',
'none',
'box-only',
'auto']),


style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array])},



render:function render(){
return(
_react2.default.createElement('div',_extends({className:_ReactStyleSheet2.default.viewClassName},this.props),
this.props.children));


}});


View.isReactNativeComponent=true;exports.default=

View;