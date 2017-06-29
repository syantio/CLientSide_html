"use strict";
var c = console;

window.onload = function(){
    var btnElem =document.getElementById("add");
    var inputElem = document.getElementById("num");
    
    var clog = function(){
        c.log(inputElem.value);
    
    } ;
    btnElem.addEventListener("click",clog);
    

}

