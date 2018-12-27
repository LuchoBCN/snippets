function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



$(document).ready( function() {



var cantPreguntas = $(".steps").length;

var i;

console.log("cantidad de preguntas: "+ cantPreguntas);

$(".question").css({"display":"flex", "-webkit-flex-direction":"column", "flex-direction":"column", "float":"left"});
$(".question").find(".steps").css("display","block");


for ( i=2; i<=cantPreguntas; i++) {
var num = getRandomIntInclusive(2,cantPreguntas);
var numDos = getRandomIntInclusive(2,cantPreguntas); 
var id = $(".step"+i).attr("id");
console.log(".step"+i);
console.log(id);
console.log(numDos);
$(".step"+i).css({"order":"" + numDos});
}

//hide items
for (a=2; a<=cantPreguntas;i++) {
$(".step"+a).hide(); 
}
/*
var pasos = [];
var longitud = pasos.length;
console.log(longitud);

*/

});
