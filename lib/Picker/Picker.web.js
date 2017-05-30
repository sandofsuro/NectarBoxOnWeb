





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var PICKER='picker';var

Picker=function(_Component){_inherits(Picker,_Component);function Picker(){_classCallCheck(this,Picker);return _possibleConstructorReturn(this,(Picker.__proto__||Object.getPrototypeOf(Picker)).apply(this,arguments));}_createClass(Picker,[{key:'_onChange',value:function _onChange(





event){

event.nativeEvent.newValue=this.refs[PICKER].value;

if(this.props.onChange){
this.props.onChange(event);
}

if(this.props.onValueChange){
this.props.onValueChange(event.nativeEvent.newValue);
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement('select',{
ref:PICKER,
value:this.props.selectedValue,
style:_extends({
margin:10,
color:'inherit',
font:'inherit'},
this.props.style),
onChange:this._onChange},

this.props.children));


}}]);return Picker;}(_react.Component);Picker.propTypes={onValueChange:_react.PropTypes.func,selectedValue:_react.PropTypes.any};
;

Picker.Item=_react2.default.createClass({displayName:'Item',
propTypes:{
value:_react.PropTypes.any,
label:_react.PropTypes.string},


render:function render(){
return _react2.default.createElement('option',{value:this.props.value},this.props.label);
}});


(0,_autobindDecorator2.default)(Picker);

Picker.isReactNativeComponent=true;exports.default=

Picker;