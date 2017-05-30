








'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _ReactDimensions=require('../Dimensions/Dimensions.web');var _ReactDimensions2=_interopRequireDefault(_ReactDimensions);
var _ReactPixelRatio=require('../PixelRatio/PixelRatio.web');var _ReactPixelRatio2=_interopRequireDefault(_ReactPixelRatio);
var _buildStyleInterpolator=require('./polyfills/buildStyleInterpolator');var _buildStyleInterpolator2=_interopRequireDefault(_buildStyleInterpolator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var SCREEN_WIDTH=_ReactDimensions2.default.get('window').width;
var SCREEN_HEIGHT=_ReactDimensions2.default.get('window').height;

var FadeToTheLeft={


transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:-Math.round(_ReactDimensions2.default.get('window').width*0.3),y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},












transformScale:{
from:{x:1,y:1,z:1},
to:{x:0.95,y:0.95,z:1},
min:0,
max:1,
type:'linear',
extrapolate:true},

opacity:{
from:1,
to:0.3,
min:0,
max:1,
type:'linear',
extrapolate:false,
round:100},

translateX:{
from:0,
to:-Math.round(_ReactDimensions2.default.get('window').width*0.3),
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

scaleX:{
from:1,
to:0.95,
min:0,
max:1,
type:'linear',
extrapolate:true},

scaleY:{
from:1,
to:0.95,
min:0,
max:1,
type:'linear',
extrapolate:true}};



var FadeToTheRight=_extends({},
FadeToTheLeft,{
transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:Math.round(SCREEN_WIDTH*0.3),y:0,z:0}},

translateX:{
from:0,
to:Math.round(SCREEN_WIDTH*0.3)}});



var FadeIn={
opacity:{
from:0,
to:1,
min:0.5,
max:1,
type:'linear',
extrapolate:false,
round:100}};



var FadeOut={
opacity:{
from:1,
to:0,
min:0,
max:0.5,
type:'linear',
extrapolate:false,
round:100}};



var ToTheLeft={
transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:-_ReactDimensions2.default.get('window').width,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

opacity:{
value:1.0,
type:'constant'},


translateX:{
from:0,
to:-_ReactDimensions2.default.get('window').width,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}};



var ToTheUp={
transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:0,y:-_ReactDimensions2.default.get('window').height,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

opacity:{
value:1.0,
type:'constant'},

translateY:{
from:0,
to:-_ReactDimensions2.default.get('window').height,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}};



var ToTheDown={
transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:0,y:_ReactDimensions2.default.get('window').height,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

opacity:{
value:1.0,
type:'constant'},

translateY:{
from:0,
to:_ReactDimensions2.default.get('window').height,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}};



var FromTheRight={
opacity:{
value:1.0,
type:'constant'},


transformTranslate:{
from:{x:_ReactDimensions2.default.get('window').width,y:0,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},


translateX:{
from:_ReactDimensions2.default.get('window').width,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},


scaleX:{
value:1,
type:'constant'},

scaleY:{
value:1,
type:'constant'}};



var FromTheLeft=_extends({},
FromTheRight,{
transformTranslate:{
from:{x:-SCREEN_WIDTH,y:0,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

translateX:{
from:-SCREEN_WIDTH,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}});



var FromTheDown=_extends({},
FromTheRight,{
transformTranslate:{
from:{y:SCREEN_HEIGHT,x:0,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

translateY:{
from:SCREEN_HEIGHT,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}});



var FromTheTop=_extends({},
FromTheRight,{
transformTranslate:{
from:{y:-SCREEN_HEIGHT,x:0,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

translateY:{
from:-SCREEN_HEIGHT,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}});



var ToTheBack={


transformTranslate:{
from:{x:0,y:0,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

transformScale:{
from:{x:1,y:1,z:1},
to:{x:0.95,y:0.95,z:1},
min:0,
max:1,
type:'linear',
extrapolate:true},

opacity:{
from:1,
to:0.3,
min:0,
max:1,
type:'linear',
extrapolate:false,
round:100},

scaleX:{
from:1,
to:0.95,
min:0,
max:1,
type:'linear',
extrapolate:true},

scaleY:{
from:1,
to:0.95,
min:0,
max:1,
type:'linear',
extrapolate:true}};



var FromTheFront={
opacity:{
value:1.0,
type:'constant'},


transformTranslate:{
from:{x:0,y:_ReactDimensions2.default.get('window').height,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

translateY:{
from:_ReactDimensions2.default.get('window').height,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

scaleX:{
value:1,
type:'constant'},

scaleY:{
value:1,
type:'constant'}};



var ToTheBackAndroid={
opacity:{
value:1,
type:'constant'}};



var FromTheFrontAndroid={
opacity:{
from:0,
to:1,
min:0.5,
max:1,
type:'linear',
extrapolate:false,
round:100},

transformTranslate:{
from:{x:0,y:100,z:0},
to:{x:0,y:0,z:0},
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()},

translateY:{
from:100,
to:0,
min:0,
max:1,
type:'linear',
extrapolate:true,
round:_ReactPixelRatio2.default.get()}};



var BaseOverswipeConfig={
frictionConstant:1,
frictionByDistance:1.5};


var BaseLeftToRightGesture={


isDetachable:false,


gestureDetectMovement:2,


notMoving:0.3,


directionRatio:0.66,


snapVelocity:2,


edgeHitWidth:30,


stillCompletionRatio:3/5,

fullDistance:SCREEN_WIDTH,

direction:'left-to-right'};



var BaseRightToLeftGesture=_extends({},
BaseLeftToRightGesture,{
direction:'right-to-left'});


var BaseDownUpGesture=_extends({},
BaseLeftToRightGesture,{
fullDistance:SCREEN_HEIGHT,
direction:'down-to-up'});


var BaseUpDownGesture=_extends({},
BaseLeftToRightGesture,{
fullDistance:SCREEN_HEIGHT,
direction:'up-to-down'});


var BaseConfig={

gestures:{
pop:BaseLeftToRightGesture},



springFriction:26,
springTension:200,


defaultTransitionVelocity:1.5,


animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheRight),
out:(0,_buildStyleInterpolator2.default)(FadeToTheLeft)}};



var NavigatorSceneConfigs={
PushFromRight:_extends({},
BaseConfig),


FloatFromRight:_extends({},
BaseConfig),


FloatFromLeft:_extends({},
BaseConfig,{
animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheLeft),
out:(0,_buildStyleInterpolator2.default)(FadeToTheRight)}}),


FloatFromBottom:_extends({},
BaseConfig,{
gestures:{
pop:_extends({},
BaseLeftToRightGesture,{
edgeHitWidth:150,
direction:'top-to-bottom',
fullDistance:SCREEN_HEIGHT})},


animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheFront),
out:(0,_buildStyleInterpolator2.default)(ToTheBack)}}),


FloatFromBottomAndroid:_extends({},
BaseConfig,{
gestures:null,
defaultTransitionVelocity:3,
springFriction:20,
animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheFrontAndroid),
out:(0,_buildStyleInterpolator2.default)(ToTheBackAndroid)}}),


FadeAndroid:_extends({},
BaseConfig,{
gestures:null,
animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FadeIn),
out:(0,_buildStyleInterpolator2.default)(FadeOut)}}),


HorizontalSwipeJump:_extends({},
BaseConfig,{
gestures:{
jumpBack:_extends({},
BaseLeftToRightGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true}),

jumpForward:_extends({},
BaseRightToLeftGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true})},


animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheRight),
out:(0,_buildStyleInterpolator2.default)(ToTheLeft)}}),


VerticalUpSwipeJump:_extends({},
BaseConfig,{
gestures:{
jumpBack:_extends({},
BaseDownUpGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true}),

jumpForward:_extends({},
BaseDownUpGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true})},


animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheDown),
out:(0,_buildStyleInterpolator2.default)(ToTheUp)}}),


VerticalDownSwipeJump:_extends({},
BaseConfig,{
gestures:{
jumpBack:_extends({},
BaseUpDownGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true}),

jumpForward:_extends({},
BaseUpDownGesture,{
overswipe:BaseOverswipeConfig,
edgeHitWidth:null,
isDetachable:true})},


animationInterpolators:{
into:(0,_buildStyleInterpolator2.default)(FromTheTop),
out:(0,_buildStyleInterpolator2.default)(ToTheDown)}})};




module.exports=NavigatorSceneConfigs;