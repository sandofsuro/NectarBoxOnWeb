
















var _EventEmitter=require('./EventEmitter');var _EventEmitter2=_interopRequireDefault(_EventEmitter);
var _ReactEventEmitterWithHolding=require('ReactEventEmitterWithHolding');var _ReactEventEmitterWithHolding2=_interopRequireDefault(_ReactEventEmitterWithHolding);
var _ReactEventHolder=require('./EventHolder');var _ReactEventHolder2=_interopRequireDefault(_ReactEventHolder);
var _ReactEventValidator=require('ReactEventValidator');var _ReactEventValidator2=_interopRequireDefault(_ReactEventValidator);
var _copyProperties=require('../core/copyProperties');var _copyProperties2=_interopRequireDefault(_copyProperties);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);
var _keyOf=require('fbjs/lib/keyOf');var _keyOf2=_interopRequireDefault(_keyOf);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TYPES_KEY=(0,_keyOf2.default)({__types:true});






















function mixInEventEmitter(klass,types){
(0,_invariant2.default)(types,'Must supply set of valid event types');
(0,_invariant2.default)(!this.__eventEmitter,'An active emitter is already mixed in');



var target=klass.prototype||klass;

var ctor=klass.constructor;
if(ctor){
(0,_invariant2.default)(
ctor===Object||ctor===Function,
'Mix EventEmitter into a class, not an instance');

}



if(target.hasOwnProperty(TYPES_KEY)){
(0,_copyProperties2.default)(target.__types,types);
}else if(target.__types){
target.__types=(0,_copyProperties2.default)({},target.__types,types);
}else{
target.__types=types;
}
(0,_copyProperties2.default)(target,EventEmitterMixin);
}

var EventEmitterMixin={
emit:function emit(eventType,a,b,c,d,e,_){
return this.__getEventEmitter().emit(eventType,a,b,c,d,e,_);
},

emitAndHold:function emitAndHold(eventType,a,b,c,d,e,_){
return this.__getEventEmitter().emitAndHold(eventType,a,b,c,d,e,_);
},

addListener:function addListener(eventType,listener,context){
return this.__getEventEmitter().addListener(eventType,listener,context);
},

once:function once(eventType,listener,context){
return this.__getEventEmitter().once(eventType,listener,context);
},

addRetroactiveListener:function addRetroactiveListener(eventType,listener,context){
return this.__getEventEmitter().addRetroactiveListener(
eventType,
listener,
context);

},

addListenerMap:function addListenerMap(listenerMap,context){
return this.__getEventEmitter().addListenerMap(listenerMap,context);
},

addRetroactiveListenerMap:function addRetroactiveListenerMap(listenerMap,context){
return this.__getEventEmitter().addListenerMap(listenerMap,context);
},

removeAllListeners:function removeAllListeners(){
this.__getEventEmitter().removeAllListeners();
},

removeCurrentListener:function removeCurrentListener(){
this.__getEventEmitter().removeCurrentListener();
},

releaseHeldEventType:function releaseHeldEventType(eventType){
this.__getEventEmitter().releaseHeldEventType(eventType);
},

__getEventEmitter:function __getEventEmitter(){
if(!this.__eventEmitter){
var emitter=new _EventEmitter2.default();
emitter=_ReactEventValidator2.default.addValidation(emitter,this.__types);

var holder=new _ReactEventHolder2.default();
this.__eventEmitter=new _ReactEventEmitterWithHolding2.default(emitter,holder);
}
return this.__eventEmitter;
}};


module.exports=mixInEventEmitter;