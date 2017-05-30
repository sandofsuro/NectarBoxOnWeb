





'use strict';

var _ReactPromise=require('../Promise/Promise.web');var _ReactPromise2=_interopRequireDefault(_ReactPromise);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var defaultOptions={
timeout:5000,
jsonpCallback:'callback'};


function generateCallbackFunction(){
return'jsonp_'+Date.now()+'_'+Math.ceil(Math.random()*100000);
}


function clearFunction(functionName){


try{
delete window[functionName];
}catch(e){
window[functionName]=undefined;
}
}

function removeScript(scriptId){
var script=document.getElementById(scriptId);
document.getElementsByTagName("head")[0].removeChild(script);
}

var fetchJsonp=function fetchJsonp(url){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var timeout=options.timeout!=null?options.timeout:defaultOptions.timeout;
var jsonpCallback=options.jsonpCallback!=null?options.jsonpCallback:defaultOptions.jsonpCallback;

var timeoutId=void 0;

return new _ReactPromise2.default(function(resolve,reject){
var callbackFunction=generateCallbackFunction();

window[callbackFunction]=function(response){
resolve({
ok:true,

json:function json(){
return _ReactPromise2.default.resolve(response);
}});


if(timeoutId)clearTimeout(timeoutId);

removeScript(jsonpCallback+'_'+callbackFunction);

clearFunction(callbackFunction);
};


url+=url.indexOf('?')===-1?'?':'&';

var jsonpScript=document.createElement('script');
jsonpScript.setAttribute("src",url+jsonpCallback+'='+callbackFunction);
jsonpScript.id=jsonpCallback+'_'+callbackFunction;
document.getElementsByTagName("head")[0].appendChild(jsonpScript);

timeoutId=setTimeout(function(){
reject(new Error('JSONP request to '+url+' timed out'));

clearFunction(callbackFunction);
removeScript(jsonpCallback+'_'+callbackFunction);
},timeout);
});
};

module.exports=fetchJsonp;