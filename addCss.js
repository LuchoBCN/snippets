//FUNCTION ADDCSS
function addCss() {
    var cssText = "<style>.next{opacity: 0;transition: opacity 1s ease-in;}}</style>";
    $(".imageBody").before(cssText);
    console.log("estoy en addCss");
}//END ADDCSS
