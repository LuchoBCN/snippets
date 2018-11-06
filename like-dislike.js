$(document).ready(function() {

console.log("ready or not");
$('.question').addClass('row');
$('.botonera').css('padding-top','30px');
$( ".steps" ).wrap( "<div class='col-sm-6'></div>" );
$( ".steps input" ).attr('placeholder','Escribe aquí');
$( ".steps input" ).css({"font-size":"14px"});
$( "#div_196597 input" ).css({"width":"100%","background-color":"#6495ED"});
$( "#div_196599 input" ).css({"width":"100%","background-color":"#D7122B","color":"#ffffff"});
$("#div_196597 .stepText ").prepend("<img src='http://www.canalsondeo.es/shared/images/encuesta%20seat/likesdislike/like.png' width='50px'> ");
$("#div_196599 .stepText ").prepend("<img src='http://www.canalsondeo.es/shared/images/encuesta%20seat/likesdislike/dislike.png' width='50px'> ");



$(".indent p").css("height","20px"); 

});
