







'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}




function _toMillis(options,key){
var dateVal=options[key];

if(typeof dateVal==='object'&&typeof dateVal.getMonth==='function'){
options[key]=dateVal.getTime();
}
}var





















DatePicker=function(){function DatePicker(){_classCallCheck(this,DatePicker);}_createClass(DatePicker,null,[{key:'open',value:function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(
















options){var optionsMs;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
optionsMs=options;
if(optionsMs){
_toMillis(options,'date');
_toMillis(options,'minDate');
_toMillis(options,'maxDate');
}case 2:case'end':return _context.stop();}}},_callee,this);}));function open(_x){return _ref.apply(this,arguments);}return open;}()},{key:'dateSetAction',get:function get()






{return'dateSetAction';}},{key:'dismissedAction',get:function get()



{return'dismissedAction';}}]);return DatePicker;}();exports.default=


DatePicker;