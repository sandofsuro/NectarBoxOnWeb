




'use strict';

var _EventPluginRegistry=require('react-dom/lib/EventPluginRegistry');var _EventPluginRegistry2=_interopRequireDefault(_EventPluginRegistry);
var _ResponderEventPlugin=require('react-dom/lib/ResponderEventPlugin');var _ResponderEventPlugin2=_interopRequireDefault(_ResponderEventPlugin);
var _ResponderTouchHistoryStore=require('react-dom/lib/ResponderTouchHistoryStore');var _ResponderTouchHistoryStore2=_interopRequireDefault(_ResponderTouchHistoryStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var eventTypes=_ResponderEventPlugin2.default.eventTypes;
eventTypes.startShouldSetResponder.dependencies=[
'topTouchStart'];


eventTypes.scrollShouldSetResponder.dependencies=[
'topScroll'];


eventTypes.selectionChangeShouldSetResponder.dependencies=[
'topSelectionChange'];


eventTypes.moveShouldSetResponder.dependencies=[
'topTouchMove'];


['responderStart','responderMove','responderEnd','responderRelease',
'responderTerminationRequest','responderGrant','responderReject','responderTerminate'].forEach(function(type){
var dependencies=void 0;
if('ontouchstart'in window){
dependencies=[
'topTouchStart',
'topTouchCancel',
'topTouchEnd',
'topTouchMove'];

}else{

dependencies=[
'topMouseDown',
'topMouseUp'];

}

eventTypes[type].dependencies=dependencies;
});

function toArray(collection){
return collection&&Array.prototype.slice.call(collection)||[];
}

function fixIdentifier(identifier){

if(identifier>20){
return identifier%20;
}

return identifier;
}

var normalizeTouches=function normalizeTouches(touches,nativeEvent){
var timestamp=nativeEvent.timestamp||nativeEvent.timeStamp;

return toArray(touches).map(function(touch){

return{
clientX:touch.clientX,
clientY:touch.clientY,
force:touch.force,
pageX:touch.pageX,
pageY:touch.pageY,
radiusX:touch.radiusX,
radiusY:touch.radiusY,
rotationAngle:touch.rotationAngle,
screenX:touch.screenX,
screenY:touch.screenY,
target:touch.target,
timestamp:timestamp,
identifier:fixIdentifier(touch.identifier)};

});
};

var originRecordTouchTrack=_ResponderTouchHistoryStore2.default.recordTouchTrack;
_ResponderTouchHistoryStore2.default.recordTouchTrack=function(topLevelType,nativeEvent){

originRecordTouchTrack.call(_ResponderTouchHistoryStore2.default,topLevelType,{
changedTouches:normalizeTouches(nativeEvent.changedTouches,nativeEvent),
touches:normalizeTouches(nativeEvent.touches,nativeEvent)});

};

_EventPluginRegistry2.default.injectEventPluginsByName({
ResponderEventPlugin:_ResponderEventPlugin2.default});