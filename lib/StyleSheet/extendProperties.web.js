




'use strict';

var _getVendorPropertyName=require('domkit/getVendorPropertyName');var _getVendorPropertyName2=_interopRequireDefault(_getVendorPropertyName);
var _CSSProperty=require('./CSSProperty');var _CSSProperty2=_interopRequireDefault(_CSSProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var shorthandProperties={
margin:true,
padding:true,
borderWidth:true,
borderRadius:true};



var numberProperties={
lineHeight:true};


var boxProperties={
paddingHorizontal:true,
paddingVertical:true,
marginHorizontal:true,
marginVertical:true};


var borderProperties={
borderColor:true,
borderWidth:true,
borderTopColor:true,
borderRightColor:true,
borderBottomColor:true,
borderLeftColor:true,
borderTopWidth:true,
borderRightWidth:true,
borderBottomWidth:true,
borderLeftWidth:true};



var flexboxProperties={
flex:'WebkitBoxFlex',
order:'WebkitBoxOrdinalGroup',

flexDirection:'WebkitBoxOrient',

alignItems:'WebkitBoxAlign',

justifyContent:'WebkitBoxPack',
flexWrap:null,
alignSelf:null};


var oldFlexboxValues={
'flex-end':'end',
'flex-start':'start',
'space-between':'justify',
'space-around':'distribute'};


var builtinStyle=document.createElement('div').style;
var flexboxSpec;
if('alignSelf'in builtinStyle)flexboxSpec='final';else
if('webkitAlignSelf'in builtinStyle)flexboxSpec='finalVendor';else
flexboxSpec='2009';


var isUCBrowser=/UCBrowser/i.test(navigator.userAgent);

var notU3=/UCBS/i.test(navigator.userAgent);
if(isUCBrowser&&!notU3)flexboxSpec='2009';

var isIE=/Trident/i.test(navigator.userAgent);
var FLEX_AUTO='1 1 auto';
var FLEX_INITIAL='0 1 auto';


function prefixOldFlexbox(property,value,result){

if(flexboxSpec==='2009'){
var oldValue=oldFlexboxValues[value]||value;
var oldProperty=flexboxProperties[property]||property;
if(oldProperty==='WebkitBoxOrient'){

if(value.indexOf('row')!=-1){
oldValue='horizontal';
}else{
oldValue='vertical';
}

var dir='';
if(value.indexOf('reverse')!=-1){
dir='reverse';
}else{
dir='normal';
}
result.WebkitBoxDirection=dir;
}
return result[oldProperty]=oldValue;

}else if(flexboxSpec==='finalVendor'){
return result[(0,_getVendorPropertyName2.default)(property)]=value;

}else{
return result[property]=value;

}
}

function defaultFlexExpansion(style,result){
var grow=style.flex||0;
var shrink=style.flexShrink||1;
var basis=style.flexBasis||'auto';
var flex=void 0;

if(grow==='auto'){
flex=FLEX_AUTO;
}else if(grow==='initial'){
flex=FLEX_INITIAL;
}else if(isNaN(grow)){
flex=grow;
}else{
flex=grow+' '+shrink+' '+basis;
}

result.flex=flex;
}

function extendBoxProperties(property,value,result){
var padding='padding';
var margin='margin';
var horizontal='Horizontal';
var vertical='Vertical';
var type=property.indexOf(margin)==0?margin:padding;
var directionType=property.indexOf(vertical)!==-1?vertical:horizontal;

if(directionType==horizontal){
result[type+'Left']=result[type+'Right']=value;
}else if(directionType==vertical){
result[type+'Top']=result[type+'Bottom']=value;
}
}

function isValidValue(value){
return value!==''&&value!==null&&value!==undefined;
}

function processValueForProp(value,prop){

if(typeof value=='number'){

if(!_CSSProperty2.default.isUnitlessNumber[prop]&&value>0&&value<1){
value=1;
}


if(numberProperties[prop]&&typeof value=='number'){
value+='px';
}
}






if(shorthandProperties[prop]&&typeof value=='string'){
value=value.replace(/\d*\.?\d+(rem|em|in|cm|mm|pt|pc|px|vh|vw|vmin|vmax|%)*/g,function(val,unit){
return unit?val:val+'px';
});
}

return value;
}

function defaultBorderStyle(style,result){
if(!style.borderStyle&&!result.borderStyle){
result.borderStyle='solid';
}

if(!style.borderWidth&&!result.borderWidth){
result.borderWidth=0;
}

if(!style.borderColor&&!result.borderColor){
result.borderColor='black';
}
}

function extendProperties(style){
var result={};

for(var property in style){
var value=style[property];
if(!isValidValue(value)){
continue;
}

if(borderProperties[property]){
defaultBorderStyle(style,result);
}

if(boxProperties[property]){
extendBoxProperties(property,value,result);
}else if(flexboxProperties[property]){
prefixOldFlexbox(property,value,result);

if(property==='flex'&&isIE){
defaultFlexExpansion(style,result);
}
}else{
value=processValueForProp(value,property);
property=(0,_getVendorPropertyName2.default)(property);
result[property]=value;
}
}

return result;
}

module.exports=extendProperties;