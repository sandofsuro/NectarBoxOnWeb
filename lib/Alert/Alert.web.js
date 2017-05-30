








'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var DEFAULT_BUTTON_TEXT='OK';
var DEFAULT_BUTTON={
text:DEFAULT_BUTTON_TEXT,
onPress:null};


var noop=function noop(){};var























AlertIOS=function(){function AlertIOS(){_classCallCheck(this,AlertIOS);}_createClass(AlertIOS,null,[{key:'alert',value:function(_alert){function alert(_x,_x2,_x3,_x4){return _alert.apply(this,arguments);}alert.toString=function(){return _alert.toString();};return alert;}(function(

title,
message,
buttons,



type)
{
var callbacks=[];
var buttonsSpec=[];
title=title||'';
message=message||'';
buttons=buttons||[DEFAULT_BUTTON];
type=type||'';

buttons.forEach(function(btn,index){
callbacks[index]=btn.onPress;
var btnDef={};
btnDef[index]=btn.text||DEFAULT_BUTTON_TEXT;
buttonsSpec.push(btnDef);
});

var confirmCallback=callbacks.pop()||noop;
var cancelCallback=callbacks.pop()||noop;
if(buttons.length===1){
alert(title);
confirmCallback();
}else if(buttons.length===2){
if(confirm(title)){
confirmCallback();
}else{
cancelCallback();
}
}else{
throw new Error('max two buttons supported: [negativeActionBtn, positiveActionBtn]');
}
})},{key:'prompt',value:function(_prompt){function prompt(_x5,_x6,_x7,_x8){return _prompt.apply(this,arguments);}prompt.toString=function(){return _prompt.toString();};return prompt;}(function(


title,
value,
buttons,



callback)
{
if(arguments.length===2){
if(typeof value==='object'){
buttons=value;
value=undefined;
}else if(typeof value==='function'){
callback=value;
value=undefined;
}
}else if(arguments.length===3&&typeof buttons==='function'){
callback=buttons;
buttons=undefined;
}

if(!buttons){
buttons=[{
text:'Cancel'},
{
text:'OK',
onPress:callback}];

}

var ret=prompt(title);
if(ret&&callback){
callback();
}
})}]);return AlertIOS;}();exports.default=


AlertIOS;