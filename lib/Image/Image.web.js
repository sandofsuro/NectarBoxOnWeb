





'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactView=require('../View/View.web');var _ReactView2=_interopRequireDefault(_ReactView);
var _ReactLayoutMixin=require('../Utilties/LayoutMixin');
var _ImageResizeMode=require('./ImageResizeMode');var _ImageResizeMode2=_interopRequireDefault(_ImageResizeMode);
var _NativeMethodsMixin=require('../Utilties/NativeMethodsMixin.web');
var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Image=function(_Component){_inherits(Image,_Component);function Image(){_classCallCheck(this,Image);return _possibleConstructorReturn(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments));}_createClass(Image,[{key:'render',value:function render()




















































{

var props=_extends({},this.props);
props.src=typeof props.source==='string'?props.source:props.source.uri;



var resizeMode=this.props.resizeMode;


if((this.props.children||resizeMode&&resizeMode!=='stretch')&&!this.context.isInAParentText){
var containerStyles=props.style?props.style:{};
containerStyles.backgroundImage='url("'+props.src+'")';
containerStyles.backgroundSize=resizeMode||'cover';
containerStyles.backgroundRepeat='no-repeat';
containerStyles.backgroundPosition='50%';

return(
_react2.default.createElement(_ReactView2.default,{style:containerStyles,'data-src':props.src},
this.props.children));


}else{
return(
_react2.default.createElement('img',props));

}
}}]);return Image;}(_react.Component);Image.resizeMode=_ImageResizeMode2.default;Image.propTypes={source:_react.PropTypes.oneOfType([_react.PropTypes.shape({uri:_react.PropTypes.string}),_react.PropTypes.number,_react.PropTypes.arrayOf(_react.PropTypes.shape({uri:_react.PropTypes.string,width:_react.PropTypes.number,height:_react.PropTypes.number}))])};Image.contextTypes={isInAParentText:_react2.default.PropTypes.bool};Image.getSize=function(url,success,failure){var wrap=document.createElement('div'),img=new window.Image(),loadedHandler=function loadedHandler(){img.removeEventListener('load',loadedHandler);success&&success(img.offsetWidth,img.offsetHeight);},errorHandler=function errorHandler(){img.removeEventListener('error',errorHandler);failure&&failure();};wrap.style.cssText='height:0px;width:0px;overflow:hidden;visibility:hidden;';wrap.appendChild(img);document.body.appendChild(wrap);img.src=url;if(!img.complete){img.addEventListener('error',errorHandler);img.addEventListener('load',loadedHandler);}else{loadedHandler();}};


_reactMixin2.default.onClass(Image,_ReactLayoutMixin.Mixin);
_reactMixin2.default.onClass(Image,_NativeMethodsMixin.Mixin);

Image.isReactNativeComponent=true;exports.default=

Image;