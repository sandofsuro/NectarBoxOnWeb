








'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _ReactRenderApplication=require('./renderApplication.web');var _ReactRenderApplication2=_interopRequireDefault(_ReactRenderApplication);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var runnables={};




















var AppRegistry={
registerConfig:function registerConfig(config){
for(var i=0;i<config.length;++i){
var appConfig=config[i];
if(appConfig.run){
AppRegistry.registerRunnable(appConfig.appKey,appConfig.run);
}else{
AppRegistry.registerComponent(appConfig.appKey,appConfig.component);
}
}
},

registerComponent:function registerComponent(appKey,getComponentFunc){
runnables[appKey]={
run:function run(appParameters){return(
(0,_ReactRenderApplication2.default)(getComponentFunc(),appParameters.initialProps,appParameters.rootTag));}};

return appKey;
},

registerRunnable:function registerRunnable(appKey,func){
runnables[appKey]={
run:func};

return appKey;
},

getAppKeys:function getAppKeys(){
return Object.keys(runnables);
},

runApplication:function runApplication(appKey,appParameters){
runnables[appKey].run(appParameters);
}};exports.default=


AppRegistry;