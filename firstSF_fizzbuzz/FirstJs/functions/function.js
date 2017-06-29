console.log("test");
var c = console;

window.onload = function(){
     var elem = document.getElementById("main");


     log(elem);
}


//function 
function log(val) {
    c.log(val);
}

//excecuted function 
log("hello");
log(1);

document.getElementById("main");
log(elem);
//excetuted before the page loaded 
var scriptelem = document.getElementsByTagName("script");
log(scriptelem);
