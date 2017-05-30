










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var logError=console.error;
var invariant=require('fbjs/lib/invariant');var





















































AppState=function(){



function AppState(){var _this=this;_classCallCheck(this,AppState);
this.currentState='active';
this._handlers={
change:[],
memoryWarning:[]};



var hidden,visibilityChange;
if(typeof document.hidden!=='undefined'){
hidden='hidden';
visibilityChange='visibilitychange';
}else if(typeof document.msHidden!=='undefined'){
hidden='msHidden';
visibilityChange='msvisibilitychange';
}else if(typeof document.webkitHidden!=='undefined'){
hidden='webkitHidden';
visibilityChange='webkitvisibilitychange';
}

document.addEventListener(visibilityChange,function(){
_this.currentState=document[hidden]?'background':'active';
_this._handlers.change.forEach(function(handler){return handler(_this.currentState);});
},false);
}_createClass(AppState,[{key:'addEventListener',value:function addEventListener(






type,
handler)
{var _this2=this;
invariant(
['change','memoryWarning'].indexOf(type)!==-1,
'Trying to subscribe to unknown event: "%s"',type);


if(type!=='change')return;

this._handlers[type].push(handler);
return function(){return _this2.removeEventListener(type,handler);};
}},{key:'removeEventListener',value:function removeEventListener(





type,
handler)
{
invariant(
['change','memoryWarning'].indexOf(type)!==-1,
'Trying to remove listener for unknown event: "%s"',type);


var idx=this._handlers[type];
if(idx!==-1){
this._handlers[type].splice(idx,1);
}
}}]);return AppState;}();


module.exports=new AppState();