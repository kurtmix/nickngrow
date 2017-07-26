var sign = prompt("What's your name?");

    if (sign === "its me" ) {
        alert("Error 404 I don't like you Kurt please refresh")  ;   
    }
    else{
    var bottext = "bottext";
    var botwords= $("#bot").append("<div class="+bottext+"> Hey "+sign+" how are you today?</div>").hide();
    $(botwords).show("slow");
   
    }        

    
$(document).ready(function(){
    $('.bottext').show("slow");
    $('button').click(function(){
        var words = $('textarea').val();
        console.log(words);
        var coolclass = "dank";
        var text = $("#myinput").append("<div class="+coolclass+">"+words+"</div>" ).hide();
        $(text).show("slow");
    });
    
       
});