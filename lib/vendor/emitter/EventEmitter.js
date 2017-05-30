var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

















var _ReactEmitterSubscription=require('./EmitterSubscription');var _ReactEmitterSubscription2=_interopRequireDefault(_ReactEmitterSubscription);
var _ReactErrorUtils=require('../../Utilties/ErrorUitls.web');var _ReactErrorUtils2=_interopRequireDefault(_ReactErrorUtils);
var _ReactEventSubscriptionVendor=require('./EventSubscriptionVendor');var _ReactEventSubscriptionVendor2=_interopRequireDefault(_ReactEventSubscriptionVendor);
var _emptyFunction=require('fbjs/lib/emptyFunction');var _emptyFunction2=_interopRequireDefault(_emptyFunction);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var














EventEmitter=function(){



function EventEmitter(){_classCallCheck(this,EventEmitter);
this._subscriber=new _ReactEventSubscriptionVendor2.default();
}_createClass(EventEmitter,[{key:'addListener',value:function addListener(
















eventType,listener,context){
return this._subscriber.addSubscription(
eventType,
new _ReactEmitterSubscription2.default(this._subscriber,listener,context));
}},{key:'once',value:function once(











eventType,listener,context){
var emitter=this;
return this.addListener(eventType,function(){
emitter.removeCurrentListener();
listener.apply(context,arguments);
});
}},{key:'removeAllListeners',value:function removeAllListeners(








eventType){
this._subscriber.removeAllSubscriptions(eventType);
}},{key:'removeCurrentListener',value:function removeCurrentListener()






















{
(0,_invariant2.default)(
!!this._currentSubscription,
'Not in an emitting cycle; there is no current subscription');

this._subscriber.removeSubscription(this._currentSubscription);
}},{key:'listeners',value:function listeners(








eventType){
var subscriptions=this._subscriber.getSubscriptionsForType(eventType);
return subscriptions?
subscriptions.filter(_emptyFunction2.default.thatReturnsTrue).map(
function(subscription){
return subscription.listener;
}):
[];
}},{key:'emit',value:function emit(















eventType){
var subscriptions=this._subscriber.getSubscriptionsForType(eventType);
if(subscriptions){
var keys=Object.keys(subscriptions);
for(var ii=0;ii<keys.length;ii++){
var key=keys[ii];
var subscription=subscriptions[key];


if(subscription){
this._currentSubscription=subscription;

_ReactErrorUtils2.default.applyWithGuard(
subscription.listener,
subscription.context,
Array.prototype.slice.call(arguments,1),
null,
'EventEmitter:'+eventType);

}
}
this._currentSubscription=null;
}
}}]);return EventEmitter;}();


module.exports=EventEmitter;