// ananymous function
window.app = (function(mod2){
    c.log("main module running");
   c.log( mod2.publicVar);
   window.onload = function() {
              mod2.doPost(function(data) {


       c.log(data);
       var elem = document.getElementById("main");
       elem.innerText= data;

   });
   }


})(window.app2||(window.app2)); // IIFE function