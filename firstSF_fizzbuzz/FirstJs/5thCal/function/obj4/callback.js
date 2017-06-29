"use strict";
var c=console;

var callback = function (msg) {
    c.log(msg);
    
}
function runcallback (cb){
    cb("test");
}

    runcallback(callback);

