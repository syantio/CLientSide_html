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
