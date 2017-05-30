







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactTouchable=require('../Touchable/Touchable');
var _ReactLayoutMixin=require('../Utilties/LayoutMixin');
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


































var Text=_react2.default.createClass({displayName:'Text',

mixins:[_ReactLayoutMixin.Mixin,_ReactTouchable.Mixin,_NativeMethodsMixin.Mixin],

propTypes:{





numberOfLines:_react2.default.PropTypes.number,





onLayout:_react2.default.PropTypes.func,



onPress:_react2.default.PropTypes.func,





suppressHighlighting:_react2.default.PropTypes.bool,



testID:_react2.default.PropTypes.string,



allowFontScaling:_react2.default.PropTypes.bool},


getInitialState:function getInitialState(){
return _extends({},this.touchableGetInitialState(),{
isHighlighted:false});

},

getDefaultProps:function getDefaultProps(){
return{
allowFontScaling:true};

},









onStartShouldSetResponder:function onStartShouldSetResponder(){
var shouldSetFromProps=this.props.onStartShouldSetResponder&&
this.props.onStartShouldSetResponder();
return shouldSetFromProps||!!this.props.onPress;
},




handleResponderTerminationRequest:function handleResponderTerminationRequest(){


var allowTermination=this.touchableHandleResponderTerminationRequest();
if(allowTermination&&this.props.onResponderTerminationRequest){
allowTermination=this.props.onResponderTerminationRequest();
}
return allowTermination;
},

handleResponderGrant:function handleResponderGrant(e,dispatchID){
this.touchableHandleResponderGrant(e,dispatchID);
this.props.onResponderGrant&&
this.props.onResponderGrant.apply(this,arguments);
},

handleResponderMove:function handleResponderMove(e){
this.touchableHandleResponderMove(e);
this.props.onResponderMove&&
this.props.onResponderMove.apply(this,arguments);
},

handleResponderRelease:function handleResponderRelease(e){
this.touchableHandleResponderRelease(e);
this.props.onResponderRelease&&
this.props.onResponderRelease.apply(this,arguments);
},

handleResponderTerminate:function handleResponderTerminate(e){
this.touchableHandleResponderTerminate(e);
this.props.onResponderTerminate&&
this.props.onResponderTerminate.apply(this,arguments);
},

touchableHandleActivePressIn:function touchableHandleActivePressIn(){
if(this.props.suppressHighlighting||!this.props.onPress){
return;
}
this.setState({
isHighlighted:true});

},

touchableHandleActivePressOut:function touchableHandleActivePressOut(){
if(this.props.suppressHighlighting||!this.props.onPress){
return;
}
this.setState({
isHighlighted:false});

},

touchableHandlePress:function touchableHandlePress(){
this.props.onPress&&this.props.onPress();
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
return PRESS_RECT_OFFSET;
},

getChildContext:function getChildContext(){
return{isInAParentText:true};
},

contextTypes:{
isInAParentText:_react2.default.PropTypes.bool},


childContextTypes:{
isInAParentText:_react2.default.PropTypes.bool},


render:function render(){
var props=_extends({},this.props);

if(props.accessible!==false){
props.accessible=true;
}
props.isHighlighted=this.state.isHighlighted;
props.onStartShouldSetResponder=this.onStartShouldSetResponder;
props.onResponderTerminationRequest=
this.handleResponderTerminationRequest;
props.onResponderGrant=this.handleResponderGrant;
props.onResponderMove=this.handleResponderMove;
props.onResponderRelease=this.handleResponderRelease;
props.onResponderTerminate=this.handleResponderTerminate;var


numberOfLines=

props.numberOfLines,style=props.style;

style=_extends({},props.style);

if(typeof style.lineHeight=='number'){
style.lineHeight+='px';
}


var lineHeight=style.lineHeight||(style.fontSize||16)*1.2;
if(typeof lineHeight=='number'){
lineHeight+='px';
}
style.lineHeight=lineHeight;

if(style.textDecorationLine){
style.textDecoration=style.textDecorationLine;
}

if(!props.children){

}

return(
_react2.default.createElement('span',_extends({},props,{
style:_extends(
{
display:this.context.isInAParentText?'inline':'inline-block',
margin:0,
padding:0,
wordWrap:'break-word',
fontFamily:'Helvetica Neue, STHeiTi, sans-serif'},

style,
numberOfLines&&{
overflow:'hidden',
textOverflow:'ellipsis',
wordWrap:'break-word',
display:'-webkit-box',
WebkitLineClamp:numberOfLines,
WebkitBoxOrient:'vertical',
maxHeight:parseFloat(lineHeight)*numberOfLines})})));



}});









var PRESS_RECT_OFFSET={top:20,left:20,right:20,bottom:30};

Text.isReactNativeComponent=true;exports.default=

Text;