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