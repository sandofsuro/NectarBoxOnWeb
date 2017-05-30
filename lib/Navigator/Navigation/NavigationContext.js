








'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _ReactNavigationEvent=require('./NavigationEvent');var _ReactNavigationEvent2=_interopRequireDefault(_ReactNavigationEvent);
var _ReactNavigationEventEmitter=require('./NavigationEventEmitter');var _ReactNavigationEventEmitter2=_interopRequireDefault(_ReactNavigationEventEmitter);
var _ReactNavigationTreeNode=require('./NavigationTreeNode');var _ReactNavigationTreeNode2=_interopRequireDefault(_ReactNavigationTreeNode);
var _emptyFunction=require('fbjs/lib/emptyFunction');var _emptyFunction2=_interopRequireDefault(_emptyFunction);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var




AT_TARGET=_ReactNavigationEvent2.default.AT_TARGET,
BUBBLING_PHASE=_ReactNavigationEvent2.default.BUBBLING_PHASE,
CAPTURING_PHASE=_ReactNavigationEvent2.default.CAPTURING_PHASE;var





NavigationContext=function(){







function NavigationContext(){_classCallCheck(this,NavigationContext);
this._bubbleEventEmitter=new _ReactNavigationEventEmitter2.default(this);
this._captureEventEmitter=new _ReactNavigationEventEmitter2.default(this);
this._currentRoute=null;


this.__node=new _ReactNavigationTreeNode2.default(this);

this._emitCounter=0;
this._emitQueue=[];

this.addListener('willfocus',this._onFocus,this);
this.addListener('didfocus',this._onFocus,this);
}_createClass(NavigationContext,[{key:'appendChild',value:function appendChild(












childContext){
this.__node.appendChild(childContext.__node);
}},{key:'addListener',value:function addListener(


eventType,
listener,
context,
useCapture)
{
var emitter=useCapture?
this._captureEventEmitter:
this._bubbleEventEmitter;
if(emitter){
return emitter.addListener(eventType,listener,context);
}else{
return{remove:_emptyFunction2.default};
}
}},{key:'emit',value:function emit(

eventType,data,didEmitCallback){var _this=this;
if(this._emitCounter>0){


var args=Array.prototype.slice.call(arguments);
this._emitQueue.push(args);
return;
}

this._emitCounter++;

var targets=[this];
var parentTarget=this.parent;
while(parentTarget){
targets.unshift(parentTarget);
parentTarget=parentTarget.parent;
}

var propagationStopped=false;
var defaultPrevented=false;
var callback=function callback(event){
propagationStopped=propagationStopped||event.isPropagationStopped();
defaultPrevented=defaultPrevented||event.defaultPrevented;
};


targets.some(function(currentTarget){
if(propagationStopped){
return true;
}

var extraInfo={
defaultPrevented:defaultPrevented,
eventPhase:CAPTURING_PHASE,
propagationStopped:propagationStopped,
target:_this};


currentTarget.__emit(eventType,data,callback,extraInfo);
},this);


targets.reverse().some(function(currentTarget){
if(propagationStopped){
return true;
}
var extraInfo={
defaultPrevented:defaultPrevented,
eventPhase:BUBBLING_PHASE,
propagationStopped:propagationStopped,
target:_this};

currentTarget.__emit(eventType,data,callback,extraInfo);
},this);

if(didEmitCallback){
var event=_ReactNavigationEvent2.default.pool(eventType,this,data);
propagationStopped&&event.stopPropagation();
defaultPrevented&&event.preventDefault();
didEmitCallback.call(this,event);
event.dispose();
}

this._emitCounter--;
while(this._emitQueue.length){
var args=this._emitQueue.shift();
this.emit.apply(this,args);
}
}},{key:'dispose',value:function dispose()

{

this._bubbleEventEmitter&&this._bubbleEventEmitter.removeAllListeners();
this._captureEventEmitter&&this._captureEventEmitter.removeAllListeners();
this._bubbleEventEmitter=null;
this._captureEventEmitter=null;
this._currentRoute=null;
}},{key:'__emit',value:function __emit(



eventType,
data,
didEmitCallback,
extraInfo)
{
var emitter;
switch(extraInfo.eventPhase){
case CAPTURING_PHASE:
emitter=this._captureEventEmitter;
break;
case BUBBLING_PHASE:
emitter=this._bubbleEventEmitter;
break;
default:
(0,_invariant2.default)(false,'invalid event phase %s',extraInfo.eventPhase);}


if(extraInfo.target===this){

extraInfo.eventPhase=AT_TARGET;
}

if(emitter){
emitter.emit(
eventType,
data,
didEmitCallback,
extraInfo);

}
}},{key:'_onFocus',value:function _onFocus(

event){
(0,_invariant2.default)(
event.data&&event.data.hasOwnProperty('route'),
'didfocus event should provide route');

this._currentRoute=event.data.route;
}},{key:'parent',get:function get(){var parent=this.__node.getParent();return parent?parent.getValue():null;}},{key:'currentRoute',get:function get(){return this._currentRoute;}}]);return NavigationContext;}();


module.exports=NavigationContext;