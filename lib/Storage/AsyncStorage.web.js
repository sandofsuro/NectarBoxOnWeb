







'use strict';

var _ReactPromise=require('../Promise/Promise.web');var _ReactPromise2=_interopRequireDefault(_ReactPromise);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var localStorage=window.localStorage;






function merge(obj1,obj2){
var obj3={};
for(var attrname in obj1){
obj3[attrname]=obj1[attrname];
}
for(var attrname in obj2){
obj3[attrname]=obj2[attrname];
}
return obj3;
}


var AsyncStorage={};


var bothMethods=[
'getItem','setItem','removeItem','clear'];







bothMethods.forEach(function(item){

var promiseMethod=function promiseMethod(){

var args=arguments;

return new _ReactPromise2.default(function(resolve,reject){

try{

var result=localStorage[item].apply(localStorage,args);
resolve(result);

}catch(err){


reject(err);

}

});
};
AsyncStorage[item]=promiseMethod;
});




AsyncStorage.mergeItem=function(key,value){

return new _ReactPromise2.default(function(resolve,reject){

try{
var oldValue=localStorage.getItem(key);
var oldObj=JSON.parse(oldValue);
var newObj=JSON.parse(value);


var mergedObj=merge(oldObj,newObj);

localStorage.setItem(key,JSON.stringify(mergedObj));
resolve();

}catch(err){
reject(err);
}

});

};




AsyncStorage.getAllKeys=function(){

var keys=[];

for(var i=0,len=localStorage.length;i<len;++i){
keys.push(localStorage.key(i));
}

return new _ReactPromise2.default(function(resolve,reject){
resolve(keys);
});

};

















AsyncStorage.multiGet=function(){

var keys=[].splice.call(arguments);
var results=null;

return new _ReactPromise2.default(function(resolve,reject){

try{

results=keys.map(function(key){
return[
key,localStorage.getItem(key)];

});

resolve(results);

}catch(err){
reject(err);
}

});
};







AsyncStorage.multiSet=function(){

var args=[].splice.call(arguments);

return new _ReactPromise2.default(function(resolve,reject){

try{

args.forEach(function(item){
return localStorage.setItem(item[0],item[1]);
});

resolve();

}catch(err){
reject(err);
}

});

};




AsyncStorage.multiRemove=function(){

var keys=[].splice.call(arguments);

return new _ReactPromise2.default(function(resolve,reject){

try{

keys.forEach(function(key){
return localStorage.removeItem(key);
});

resolve();

}catch(err){
reject(err);
}

});
};







AsyncStorage.multiMerge=function(){

var self=this;
var args=[].splice.call(arguments);

return new _ReactPromise2.default(function(resolve,reject){
try{
var promiseQueue=args.map(function(arg){
return self.mergeItem(arg[0],arg[1]);
});
resolve(_ReactPromise2.default.all(promiseQueue));
}catch(err){
reject(err);
}

});

};

module.exports=AsyncStorage;