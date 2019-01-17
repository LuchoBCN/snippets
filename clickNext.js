//ONCLICK
 $(document).find(".steps td img").on('click', function() {
steps = steps+1;
console.log(steps);

 //$(this).closest( ".steps" ).css({"-webkit-transition":"transform 0.5s, opacity 0.3s", "transition":"transform 0.5s opacity 0.3s", "opacity":"0","transform":"translateY(-100%)","-webkit-transform":"translateY(-100%)","-moz-transform":"translateY(-100%)","-o-transform":"translateY(-100%)", "transition-timing-function":"easy", "transition-delay":".8s" });
 $(this).closest( ".steps" ).addClass( "next" );
