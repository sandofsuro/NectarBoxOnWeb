





'use strict';


function getCumulativeOffset(obj){
var left,top;
left=top=0;
if(obj.offsetParent){
do{
left+=obj.offsetLeft;
top+=obj.offsetTop;
}while(obj=obj.offsetParent);
}
return{
x:left,
y:top};

}


function getLayout(element){
var rect=getCumulativeOffset(element);
return{
x:rect.x,
y:rect.y,
width:element.offsetWidth,
height:element.offsetHeight};

}

module.exports=getLayout;