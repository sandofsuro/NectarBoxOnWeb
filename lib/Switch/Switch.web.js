





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _ReactStyleSheet=require('../StyleSheet/StyleSheet.web');var _ReactStyleSheet2=_interopRequireDefault(_ReactStyleSheet);
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Switch=function(_Component){_inherits(Switch,_Component);function Switch(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Switch);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Switch.__proto__||Object.getPrototypeOf(Switch)).call.apply(_ref,[this].concat(args))),_this),_this.
















state={
value:_this.props.value,
disabled:_this.props.disabled},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Switch,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(


nextProps){
this.setState({
value:nextProps.value,
disabled:nextProps.disabled});

}},{key:'getStyles',value:function getStyles()

{
return _ReactStyleSheet2.default.create({
span:{
position:'relative',
display:'inline-block',
margin:2,
height:30,
width:50,
cursor:'default',
verticalAlign:'middle',
borderRadius:20,
borderColor:'#dfdfdf',
borderWidth:1,
borderStyle:'solid',
WebkitUserSelect:'none',
WebkitBoxSizing:'content-box',
WebkitBackfaceVisibility:'hidden'},

checkedSpan:{
borderColor:this.props.onTintColor,
backgroundColor:this.props.onTintColor,
boxShadow:this.props.onTintColor+' 0 0 0 16px inset',
WebkitTransition:'border 0.2s, box-shadow 0.2s, background-color 1s'},

uncheckedSpan:{
borderColor:'#dfdfdf',
backgroundColor:this.props.tintColor,
boxShadow:'#dfdfdf 0 0 0 0 inset',
WebkitTransition:'border 0.2s, box-shadow 0.2s'},

disabledSpan:{
opacity:0.5,
cursor:'not-allowed',
boxShadow:'none'},

small:{
position:'absolute',
top:0,
width:30,
height:30,
backgroundColor:this.props.thumbTintColor,
borderRadius:'100%',
boxShadow:'0 1px 3px rgba(0,0,0,0.4)',
WebkitTransition:'-webkit-transform 0.2s ease-in'},

checkedSmall:{
WebkitTransform:'translateX(20px)'},

uncheckedSmall:{
WebkitTransform:'translateX(0)'}});


}},{key:'handleClick',value:function handleClick(

e){
if(this.state.disabled){
return null;
}

var newVal=!this.state.value;
this.props.onValueChange&&this.props.onValueChange.call(this,newVal);
this.setState({
value:newVal});


var oldValue=this.props.value;
setTimeout(function(){
if(this.props.value==oldValue){
this.setState({
value:this.props.value});

}
}.bind(this),200);
}},{key:'render',value:function render()

{
var styles=this.getStyles();
var spancss=this.state.value?_extends({},styles.span,styles.checkedSpan):_extends({},styles.span,styles.uncheckedSpan);
var smallcss=this.state.value?_extends({},styles.small,styles.checkedSmall):_extends({},styles.small,styles.uncheckedSmall);
spancss=this.state.disabled?_extends({},spancss,styles.disabledSpan):spancss;

return(
_react2.default.createElement('span',{onClick:this.handleClick,style:spancss},
_react2.default.createElement('small',{style:smallcss})));


}}]);return Switch;}(_react.Component);Switch.propTypes={value:_react.PropTypes.bool,disabled:_react.PropTypes.bool,onValueChange:_react.PropTypes.func,onTintColor:_react.PropTypes.string,thumbTintColor:_react.PropTypes.string,tintColor:_react.PropTypes.string};Switch.defaultProps={onTintColor:'#00e158',thumbTintColor:'#fff',tintColor:'#fff'};

;

_reactMixin2.default.onClass(Switch,_NativeMethodsMixin.Mixin);
(0,_autobindDecorator2.default)(Switch);

Switch.isReactNativeComponent=true;exports.default=

Switch;