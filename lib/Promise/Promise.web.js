






'use strict';

var _es6Extensions=require('promise/lib/es6-extensions');var _es6Extensions2=_interopRequireDefault(_es6Extensions);
require('promise/lib/done');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




_es6Extensions2.default.prototype.finally=function(onSettled){
return this.then(onSettled,onSettled);
};

module.exports=_es6Extensions2.default;