"use strict"
var c= console;
window.onload = function() {
  var swurl = "http://swapi.co/api/people/1"  ;
   var pokeurl = "http://pokeapi.co/api/v2/pokemon/1 " ;

   var xhr = new XMLHttpRequest();
   console.log("xhr object created: " + xhr.readyState);

xhr.onreadystatechange = function()
{
  if( xhr.readyState == 4 && xhr.status ==200){
    var data = xhr.responseText;
    c.log(data);
    c.log(JSON.parse(data));

    var elem = document.getElementById("main");
    var obj = JSON.parse(data);
  elem.innerText = obj.name;
  }
}
xhr.open("GET",swurl,true);
xhr.send();


}