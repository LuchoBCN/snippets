function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}



$(document).ready( function() {

//FUNCTION ADDCSS
function addCss() {
    var cssText = "<style>.hide{display:none;opacity:0;}</style>";
    $(".imageBody").before(cssText);
}//END ADDCSS
addCss();

/*VARIABLES PÚBLICAS*/
var check = [];
var cantPreguntas = $(".steps").length;


console.log("cantidad de preguntas: "+ cantPreguntas);

//CAMBIA ESTILOS PARA PODER REORDENAR
$(".question").css({"display":"flex", "-webkit-flex-direction":"column", "flex-direction":"column"});
$(".question").find(".steps").css("display","block");

//LOOP POR STEPS
for ( i=2; i<=cantPreguntas; i++) {
//VARIABLES
var num = getRandomIntInclusive(2,cantPreguntas);
var numDos = getRandomIntInclusive(2,cantPreguntas);
var id = $(".step"+i).attr("id");
//CHECKS
console.log(numDos);
console.log(check);
    //IF CONDICIÓN - REORDENA - HIDE
    if (check.includes(numDos)) {
        //Está en el array. Aquí debería hacer un loop hasta encontrar un número
        while (check.includes(numDos)) {
            numDos = getRandomIntInclusive(2,cantPreguntas);
        }
        $(".step"+i).css({"order":"" + numDos});
        var numOrden = numDos-1;
        $(".step"+i).attr("orden",""+numOrden);
        check.push(numDos);
    }else{
        $(".step"+i).css({"order":"" + numDos});
        var numOrden = numDos-1;
        $(".step"+i).attr("orden",""+numOrden);
        check.push(numDos);
    }/*END IF*/
}/*END FOR*/

/*HIDE STEPS*/
for ( i=2; i<=cantPreguntas; i++) {
    console.log("estoy adentro de HIDE");
    $(".step"+i).addClass("hide");
    $(".step"+i).css({"display":"none","opacity":"0","-webkit-transition":"opacity 2s","transition":"opacity 2s"});
}/*END STEPS*/

/*SHOW LOS ITEM EN ORDEN*/
var item = 1;
$("[orden=1]").removeClass("hide");
$("[orden=1]").css({"opacity":"1","display":"block"});
/*CLICK LISTENER*/
$(".steps table td").on('click', function() {
    item++
    $("[orden="+item+"]").css({"display":"block","opacity":"1"});
    /*$("[orden="+item+"]").removeClass("hide");*/
    /*$('html,body').animate({
    scrollTop:$("[orden="+item+"]").offset().top
    }, '800');*/
});

//CAMBIO DE COLORES
$(".step2").find("p:first-child").css({"background-color":"white","color":"#3399ff","font-style":"italic"});
$(".step3").find("p:first-child").css({"background-color":"white","color":"#3399ff","font-style":"italic"});
$(".step4").find("p:first-child").css({"background-color":"white","color":"#3399ff","font-style":"italic"});
$(".step5").find("p:first-child").css({"background-color":"white","color":"#3399ff","font-style":"italic"});



});//END DOCUMENT READY
