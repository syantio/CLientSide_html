"use strict";
var c=console ;

window.onload=function(){
    var rect = new Rectangle(2,4);
    c.log(rect.Area());


};
// a shape object

function Shape(height,width) {
    this.height = height
    this.width = width;

}

//rectangle

function Rectangle(height,width) {
    Shape.call(this,height,width);
    this.Area = function () { return this.height*this.width
        
    }
    
}