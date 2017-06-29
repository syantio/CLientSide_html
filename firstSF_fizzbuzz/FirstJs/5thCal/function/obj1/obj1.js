
window.onload = function () {

   function Shape(type,height,width){
       this.type = type;
       this.height = height;
        this.width = width;

   }
var triangle = new Shape("triangle",2,3);
Shape.prototype.Area = function() {
return  this.height*this.width;  
}
var square = new Shape("square",2,2);
var rectangle = new Shape("rectangle",2,3);

console.log(Shape);
console.log(square);
console.log(rectangle);
console.log(triangle);
}