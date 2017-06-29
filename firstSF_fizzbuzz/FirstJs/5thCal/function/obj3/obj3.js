"use strict";
var c =console;
function outer(){
    var count =0;
    return{
        addToCount:function(i){count +=i;},
        getCount:function(){return count;}
            
        };
    }
    function person(frame,lname){
        return{
            getFullName: function(){return fname + ""+ lname;}
        }
    }

    // execute outer and return "inner ' OJECT"
var counter = outer();
c.log(counter.getCount());
c.log(counter.addToCount(10));
c.log(counter.getCount());
