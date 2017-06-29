"use strict";
var c = console;

window.onload = function(){
    var btnElem = document.getElementById("btnGo");
    var inputElem = document.getElementById("tb");


    var clog = function(){
        c.log(inputElem.value);


    }

    btnElem.addEventListener("click",clog)
    inputElem.addEventListener("keypress",clog)
}

