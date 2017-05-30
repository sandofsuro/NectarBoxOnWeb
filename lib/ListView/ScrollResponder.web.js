









'use strict';

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _warning=require('fbjs/lib/warning');var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}















































































var IS_ANIMATING_TOUCH_START_THRESHOLD_MS=16;










var ScrollResponderMixin={


scrollResponderMixinGetInitialState:function scrollResponderMixinGetInitialState(){
return{
isTouching:false,
lastMomentumScrollBeginTime:0,
lastMomentumScrollEndTime:0,






observedScrollSinceBecomingResponder:false,
becameResponderWhileAnimating:false};

},




scrollResponderHandleScrollShouldSetResponder:function scrollResponderHandleScrollShouldSetResponder(){
return this.state.isTouching;
},


























scrollResponderHandleStartShouldSetResponder:function scrollResponderHandleStartShouldSetResponder(){
return false;
},












scrollResponderHandleStartShouldSetResponderCapture:function scrollResponderHandleStartShouldSetResponderCapture(e){







return this.scrollResponderIsAnimating();
},






scrollResponderHandleMoveShouldSetResponderCapture:function scrollResponderHandleMoveShouldSetResponderCapture(e){
return true;
},











scrollResponderHandleResponderReject:function scrollResponderHandleResponderReject(){
(0,_warning2.default)(false,"ScrollView doesn't take rejection well - scrolls anyway");
},
















scrollResponderHandleTerminationRequest:function scrollResponderHandleTerminationRequest(){
return!this.state.observedScrollSinceBecomingResponder;
},






scrollResponderHandleTouchEnd:function scrollResponderHandleTouchEnd(e){
var nativeEvent=e.nativeEvent;
this.state.isTouching=nativeEvent.touches.length!==0;
this.props.onTouchEnd&&this.props.onTouchEnd(e);
},




scrollResponderHandleResponderRelease:function scrollResponderHandleResponderRelease(e){
this.props.onResponderRelease&&this.props.onResponderRelease(e);




if(!this.props.keyboardShouldPersistTaps&&

!this.state.observedScrollSinceBecomingResponder&&
!this.state.becameResponderWhileAnimating){
this.props.onScrollResponderKeyboardDismissed&&
this.props.onScrollResponderKeyboardDismissed(e);

}
},

scrollResponderHandleScroll:function scrollResponderHandleScroll(e){
this.state.observedScrollSinceBecomingResponder=true;
this.props.onScroll&&this.props.onScroll(e);
},




scrollResponderHandleResponderGrant:function scrollResponderHandleResponderGrant(e){
this.state.observedScrollSinceBecomingResponder=false;
this.props.onResponderGrant&&this.props.onResponderGrant(e);
this.state.becameResponderWhileAnimating=this.scrollResponderIsAnimating();
},








scrollResponderHandleScrollBeginDrag:function scrollResponderHandleScrollBeginDrag(e){
this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e);
},




scrollResponderHandleScrollEndDrag:function scrollResponderHandleScrollEndDrag(e){
this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e);
},




scrollResponderHandleMomentumScrollBegin:function scrollResponderHandleMomentumScrollBegin(e){
this.state.lastMomentumScrollBeginTime=Date.now();
this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e);
},




scrollResponderHandleMomentumScrollEnd:function scrollResponderHandleMomentumScrollEnd(e){
this.state.lastMomentumScrollEndTime=Date.now();
this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e);
},












scrollResponderHandleTouchStart:function scrollResponderHandleTouchStart(e){
this.state.isTouching=true;
this.props.onTouchStart&&this.props.onTouchStart(e);
},












scrollResponderHandleTouchMove:function scrollResponderHandleTouchMove(e){
this.props.onTouchMove&&this.props.onTouchMove(e);
},






scrollResponderIsAnimating:function scrollResponderIsAnimating(){
var now=Date.now();
var timeSinceLastMomentumScrollEnd=now-this.state.lastMomentumScrollEndTime;
var isAnimating=timeSinceLastMomentumScrollEnd<IS_ANIMATING_TOUCH_START_THRESHOLD_MS||
this.state.lastMomentumScrollEndTime<this.state.lastMomentumScrollBeginTime;
return isAnimating;
},






scrollResponderScrollTo:function scrollResponderScrollTo(offsetX,offsetY){

this.scrollResponderScrollWithouthAnimationTo(offsetX,offsetY);
},





scrollResponderScrollWithouthAnimationTo:function scrollResponderScrollWithouthAnimationTo(offsetX,offsetY){

var node=_reactDom2.default.findDOMNode(this);
node.offsetX=offsetX;
node.offsetY=offsetY;
},





scrollResponderZoomTo:function scrollResponderZoomTo(rect){


},











scrollResponderScrollNativeHandleToKeyboard:function scrollResponderScrollNativeHandleToKeyboard(nodeHandle,additionalOffset,preventNegativeScrollOffset){
this.additionalScrollOffset=additionalOffset||0;
this.preventNegativeScrollOffset=!!preventNegativeScrollOffset;






},











scrollResponderInputMeasureAndScrollToKeyboard:function scrollResponderInputMeasureAndScrollToKeyboard(left,top,width,height){
if(this.keyboardWillOpenTo){
var scrollOffsetY=
top-this.keyboardWillOpenTo.endCoordinates.screenY+height+
this.additionalScrollOffset;





if(this.preventNegativeScrollOffset){
scrollOffsetY=Math.max(0,scrollOffsetY);
}
this.scrollResponderScrollTo(0,scrollOffsetY);
}
this.additionalOffset=0;
this.preventNegativeScrollOffset=false;
},

scrollResponderTextInputFocusError:function scrollResponderTextInputFocusError(e){
console.error('Error measuring text field: ',e);
},







componentWillMount:function componentWillMount(){










},





























scrollResponderKeyboardWillShow:function scrollResponderKeyboardWillShow(e){
this.keyboardWillOpenTo=e;
this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e);
},

scrollResponderKeyboardWillHide:function scrollResponderKeyboardWillHide(e){
this.keyboardWillOpenTo=null;
this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e);
},

scrollResponderKeyboardDidShow:function scrollResponderKeyboardDidShow(e){


if(e){
this.keyboardWillOpenTo=e;
}
this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e);
},

scrollResponderKeyboardDidHide:function scrollResponderKeyboardDidHide(){
this.keyboardWillOpenTo=null;
this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide();
}};



var ScrollResponder={
Mixin:ScrollResponderMixin};


module.exports=ScrollResponder;