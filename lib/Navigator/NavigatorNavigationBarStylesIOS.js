








'use strict';

var _ReactDimensions=require('../Dimensions/Dimensions.web');var _ReactDimensions2=_interopRequireDefault(_ReactDimensions);
var _buildStyleInterpolator=require('./polyfills/buildStyleInterpolator');var _buildStyleInterpolator2=_interopRequireDefault(_buildStyleInterpolator);
var _merge=require('./polyfills/merge');var _merge2=_interopRequireDefault(_merge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var SCREEN_WIDTH=_ReactDimensions2.default.get('window').width;
var NAV_BAR_HEIGHT=44;
var STATUS_BAR_HEIGHT=20;
var NAV_HEIGHT=NAV_BAR_HEIGHT+STATUS_BAR_HEIGHT;

var BASE_STYLES={
Title:{
position:'absolute',
top:STATUS_BAR_HEIGHT,
left:0,
right:0,
alignItems:'center',
height:NAV_BAR_HEIGHT,
backgroundColor:'transparent'},

LeftButton:{
position:'absolute',
top:STATUS_BAR_HEIGHT,
left:0,
overflow:'hidden',
opacity:1,
height:NAV_BAR_HEIGHT,
backgroundColor:'transparent'},

RightButton:{
position:'absolute',
top:STATUS_BAR_HEIGHT,
right:0,
overflow:'hidden',
opacity:1,
alignItems:'flex-end',
height:NAV_BAR_HEIGHT,
backgroundColor:'transparent'}};










var Stages={
Left:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{left:-SCREEN_WIDTH/2,opacity:0}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{left:-SCREEN_WIDTH/3,opacity:1}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{left:SCREEN_WIDTH/3,opacity:0})},

Center:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{left:0,opacity:1}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{left:0,opacity:1}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{left:2*SCREEN_WIDTH/3-0,opacity:1})},

Right:{
Title:(0,_merge2.default)(BASE_STYLES.Title,{left:SCREEN_WIDTH/2,opacity:0}),
LeftButton:(0,_merge2.default)(BASE_STYLES.LeftButton,{left:0,opacity:0}),
RightButton:(0,_merge2.default)(BASE_STYLES.RightButton,{left:SCREEN_WIDTH,opacity:0})}};




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
StatusBarHeight:STATUS_BAR_HEIGHT,
TotalNavHeight:NAV_HEIGHT},

Interpolators:Interpolators,
Stages:Stages};