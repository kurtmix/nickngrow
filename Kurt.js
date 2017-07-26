$(document).ready(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").hide();
    $(".four").hide();
    $(".five").hide();
    $(".six").hide();
    $(".seven").hide();
var sign = prompt("What's your name?");

    if (sign === "its me" ) {
        alert("Error 404 I don't like you Kurt please refresh")  ;   
    }
    else{
    var bottext = "bottext";
    var botwords= $("#bot").append("<div class="+bottext+"> Hey "+sign+" how are you today?</div>").hide();
    $(botwords).show("slow");
    }        
});



setTimeout(function(){
   $('.one').show("slow");// or fade, css display however you'd like.
}, 3000);

setTimeout(function(){
   $('.two').show("slow");// or fade, css display however you'd like.
}, 5000);

setTimeout(function(){
   $('.three').show("slow");// or fade, css display however you'd like.
}, 8000);

setTimeout(function(){
   $('.four').show("slow");// or fade, css display however you'd like.
}, 9000);

setTimeout(function(){
   $('.five').show("slow");// or fade, css display however you'd like.
}, 9500);

setTimeout(function(){
   $('.six').show("slow");// or fade, css display however you'd like.
}, 13000);

setTimeout(function(){
   $('.seven').show("slow");// or fade, css display however you'd like.
}, 14000);