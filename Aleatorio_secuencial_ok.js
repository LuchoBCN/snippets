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
    if (check.indexOf(numDos)!=-1) {
        //Está en el array. Aquí debería hacer un loop hasta encontrar un número
        while (check.indexOf(numDos)!=-1) {
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
//CAMBIO DE COLOR
$(".step"+i).find(".stepText p").css({"border-bottom":"4px solid #ed7131","color":"#ed7131","background-color":"white"});
    $(".step"+i).addClass("hide");
    $(".step"+i).css({"display":"none","opacity":"0","-webkit-transition":"opacity 2s","transition":"opacity 2s"});
}/*END STEPS*/





/*SHOW LOS ITEM EN ORDEN*/
var item = 1;
$("[orden=1]").removeClass("hide");
$("[orden=1]").addClass("foco");
$("[orden=1]").css({"opacity":"1","display":"block"});
/*CLICK LISTENER*/
$(".steps table td").on('click', function() {
/*$(this).closest( ".steps" ).css("background-color","red");*/
if ($(this).closest( ".steps" ).hasClass("foco")) {
    $(this).closest( ".steps" ).removeClass("foco");
    item++
    $("[orden="+item+"]").css({"display":"block","opacity":"1"});
    $("[orden="+item+"]").addClass("foco");
    $('html,body').animate({
    scrollTop:$("[orden="+item+"]").offset().top
    }, 'slow');
}/*end if*/
});
/*END LISTENER*/




});//END DOCUMENT READY
