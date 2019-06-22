// version lulu
var scroll = setInterval(function(){ 
var addUser = 0;
jQuery.each($("[data-control-name='invite']"), function () {
    addUser++;
    $(this).click();
    window.scrollBy(0,1000) }, 3000);
});


// version rourou
var scroll = setInterval(function(){
    let boutons = document.querySelectorAll("[data-control-name='invite']")
    boutons.forEach( e => e.click())
    boutons = [];
    window.scrollBy(0,1000) ; }, 2000);
