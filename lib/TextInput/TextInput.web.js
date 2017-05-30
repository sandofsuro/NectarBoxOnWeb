







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _autobindDecorator=require('autobind-decorator');var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var typeMap={
'default':'text',
'ascii-capable':'text',
'numbers-and-punctuation':'number',
'url':'url',
'number-pad':'number',
'phone-pad':'tel',
'name-phone-pad':'text',
'email-address':'email',
'decimal-pad':'number',
'twitter':'text',
'web-search':'search',
'numeric':'number'};var


TextInput=function(_Component){_inherits(TextInput,_Component);function TextInput(){_classCallCheck(this,TextInput);return _possibleConstructorReturn(this,(TextInput.__proto__||Object.getPrototypeOf(TextInput)).apply(this,arguments));}_createClass(TextInput,[{key:'_onBlur',value:function _onBlur(









e){var
onBlur=this.props.onBlur;
if(onBlur){
e.nativeEvent.text=e.target.value;
onBlur(e);
}
}},{key:'_onChange',value:function _onChange(

e){var _props=
this.props,onChange=_props.onChange,onChangeText=_props.onChangeText;
if(onChangeText)onChangeText(e.target.value);
if(onChange){
e.nativeEvent.text=e.target.value;
onChange(e);
}
}},{key:'_onFocus',value:function _onFocus(

e){var _props2=
this.props,clearTextOnFocus=_props2.clearTextOnFocus,onFocus=_props2.onFocus,selectTextOnFocus=_props2.selectTextOnFocus;
var node=_reactDom2.default.findDOMNode(this);
if(clearTextOnFocus)node.value='';
if(selectTextOnFocus)node.select();
if(onFocus){
e.nativeEvent.text=e.target.value;
onFocus(e);
}
}},{key:'_onSelectionChange',value:function _onSelectionChange(

e){var
onSelectionChange=this.props.onSelectionChange;

if(onSelectionChange){var _e$target=
e.target,selectionDirection=_e$target.selectionDirection,selectionEnd=_e$target.selectionEnd,selectionStart=_e$target.selectionStart;
e.nativeEvent.text=e.target.value;
var event={
selectionDirection:selectionDirection,
selectionEnd:selectionEnd,
selectionStart:selectionStart,
nativeEvent:e.nativeEvent};

onSelectionChange(event);
}
}},{key:'componentDidMount',value:function componentDidMount()

{
if(this.props.autoFocus){
_reactDom2.default.findDOMNode(this.refs.input).focus();
}
}},{key:'render',value:function render()

{var _props3=

























this.props,accessibilityLabel=_props3.accessibilityLabel,autoComplete=_props3.autoComplete,autoFocus=_props3.autoFocus,defaultValue=_props3.defaultValue,editable=_props3.editable,keyboardType=_props3.keyboardType,maxLength=_props3.maxLength,maxNumberOfLines=_props3.maxNumberOfLines,multiline=_props3.multiline,numberOfLines=_props3.numberOfLines,onBlur=_props3.onBlur,onChange=_props3.onChange,onKeyDown=_props3.onKeyDown,onKeyUp=_props3.onKeyUp,onKeyPress=_props3.onKeyPress,onChangeText=_props3.onChangeText,onSelectionChange=_props3.onSelectionChange,placeholder=_props3.placeholder,password=_props3.password,secureTextEntry=_props3.secureTextEntry,style=_props3.style,testID=_props3.testID,value=_props3.value;

var propsCommon={
ref:'input',
'aria-label':accessibilityLabel,
autoComplete:autoComplete&&'on',
autoFocus:autoFocus,
defaultValue:defaultValue,
maxLength:maxLength,
onBlur:onBlur&&this._onBlur,
onChange:(onChange||onChangeText)&&this._onChange,
onFocus:this._onFocus,
onSelect:onSelectionChange&&this._onSelectionChange,
placeholder:placeholder,
readOnly:!editable,
style:_extends({},
styles.initial,
style),

testID:testID,
value:value,
onKeyDown:onKeyDown,
onKeyUp:onKeyUp,
onKeyPress:onKeyPress};


var input=void 0;
if(multiline){
var propsMultiline=_extends({},
propsCommon,{
maxRows:maxNumberOfLines||numberOfLines,
minRows:numberOfLines});


input=_react2.default.createElement('textarea',propsMultiline);

}else{

var type=typeMap[keyboardType];

if(password||secureTextEntry){
type='password';
}

var propsSingleline=_extends({},
propsCommon,{
type:type});


input=_react2.default.createElement('input',propsSingleline);
}

if(this.props.children){
return(
_react2.default.createElement(_ReactView2.default,null,
input,
this.props.children));


}else{
return input;
}
}}]);return TextInput;}(_react.Component);TextInput.defaultProps={editable:true,multiline:false,secureTextEntry:false,keyboardType:'default',autoFocus:false};
;

var styles={
initial:{
appearance:'none',
backgroundColor:'transparent',
borderColor:'black',
borderWidth:0,
boxSizing:'border-box',
color:'inherit',
font:'inherit',
padding:0,
height:30}};



(0,_autobindDecorator2.default)(TextInput);

TextInput.isReactNativeComponent=true;exports.default=

TextInput;