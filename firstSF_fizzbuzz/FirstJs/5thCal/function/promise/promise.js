"use strict";
var c=console;
 function getPrommise(msg){
      var val = new Promise(function(res, rej){
          res(msg + " promise resolved");

      })
      return val;
 }
 var thePromise = getPrommise("hello");
 thePromise.then(function(data){

     c.log(data);

 });

function getObject(count){
    return new Promise(function(res, rej){
        res({counter: count,addToCount:function(x){this.counter+=x;}})
    });

}
getObject(0).then(function(timer){
    c.log(timer.counter);
    timer.addToCount(1);
    c.log(timer.counter);
    timer.addToCount(2);
})