








'use strict';

var _buildStyleInterpolator=require('./polyfills/buildStyleInterpolator');var _buildStyleInterpolator2=_interopRequireDefault(_buildStyleInterpolator);
var _merge=require('./polyfills/merge');var _merge2=_interopRequireDefault(_merge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var NAV_BAR_HEIGHT=56;
var TITLE_LEFT=72;
var BUTTON_SIZE=24;
var TOUCH_TARGT_SIZE=48;
var BUTTON_HORIZONTAL_MARGIN=16;

var BUTTON_EFFECTIVE_MARGIN=BUTTON_HORIZONTAL_MARGIN-(TOUCH_TARGT_SIZE-BUTTON_SIZE)/2;
var NAV_ELEMENT_HEIGHT=NAV_BAR_HEIGHT;

var BASE_STYLES={
Title:{
position:'absolute',
bottom:0,
left:0,
right:0,
alignItems:'flex-start',
height:NAV_ELEMENT_HEIGHT,
backgroundColor:'transparent',
marginLeft:TITLE_LEFT},

LeftButton:{
position:'absolute',
top:0,
left:BUTTON_EFFECTIVE_MARGIN,
overflow:'hidden',
height:NAV_ELEMENT_HEIGHT,
backgroundColor:'transparent'},

RightButton:{
position:'absolute',
top:0,
right:BUTTON_EFFECTIVE_MARGIN,
overflow:'hidden',
alignItems:'flex-end',
height:NAV_ELEMENT_HEIGHT,
backgroundColor:'transparent'}};










var Stages={
Left:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{opacity:0}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{opacity:0}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{opacity:0})},

Center:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{opacity:1}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{opacity:1}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{opacity:1})},

Right:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{opacity:0}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{opacity:0}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{opacity:0})}};




var opacityRatio=100;

function buildSceneInterpolators(startStyles,endStyles){
return{
Title:(0,_buildStyleInterpolator2.default)({
opacity:{
type:'linear',
from:startStyles.Title.opacity,
to:endStyles.Title.opacity,
min:0,
max:1},

left:{
type:'linear',
from:startStyles.Title.left,
to:endStyles.Title.left,
min:0,
max:1,
extrapolate:true}}),


LeftButton:(0,_buildStyleInterpolator2.default)({
opacity:{
type:'linear',
from:startStyles.LeftButton.opacity,
to:endStyles.LeftButton.opacity,
min:0,
max:1,
round:opacityRatio},

left:{
type:'linear',
from:startStyles.LeftButton.left,
to:endStyles.LeftButton.left,
min:0,
max:1}}),


RightButton:(0,_buildStyleInterpolator2.default)({
opacity:{
type:'linear',
from:startStyles.RightButton.opacity,
to:endStyles.RightButton.opacity,
min:0,
max:1,
round:opacityRatio},

left:{
type:'linear',
from:startStyles.RightButton.left,
to:endStyles.RightButton.left,
min:0,
max:1,
extrapolate:true}})};



}

var Interpolators={

RightToCenter:buildSceneInterpolators(Stages.Right,Stages.Center),

CenterToLeft:buildSceneInterpolators(Stages.Center,Stages.Left),

RightToLeft:buildSceneInterpolators(Stages.Right,Stages.Left)};



module.exports={
General:{
NavBarHeight:NAV_BAR_HEIGHT,
StatusBarHeight:0,
TotalNavHeight:NAV_BAR_HEIGHT},

Interpolators:Interpolators,
Stages:Stages};