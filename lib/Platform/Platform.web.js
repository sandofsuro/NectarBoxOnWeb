






'use strict';

var Platform={
OS:'web',
select:function select(platform){
return platform.web||platform.ios;
}};


module.exports=Platform;