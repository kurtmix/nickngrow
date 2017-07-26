var username = document.getElementById("userInput");
var answer;
var score = 0;
var unlockScore1 = 40; 
var randomString;
//array of practice key excercizes 
var practiceKeys = ["jjj", "fff", "jfjf jff", "fjj jfj fff", "jjff fjjf ffjj"];

var positivity = ["Good Job!", "Well Done", "Great Job!", "You're Doing Great", 
"You are a great typer!", "Amazing", "Fantastic"];

//start function after kid enters character page for the first time 
$(document).ready(function(){
	
var sign = prompt("What's your name?");

    if (sign === "its me" ) {
        alert("Error 404 I don't like you Kurt please refresh")  ;   
    }
    else{
    var bottext = "bottext";
    var botwords= $("#bot").append("<div class="+bottext+"> Hey "+sign+" how are you today?</div>").hide();
    $(botwords).show("slow");
   
    }       
     $('button').one( "click", function() {
        $('.bottext').show("slow");
        var words = $('textarea').val();
        console.log(words);
        var coolclass = "dank";
        var text = $("#myinput").append("<div class="+coolclass+">"+words+"</div>" ).hide();
        $(text).show("slow");
    });
});



// $( "button" ).on( "click", function() {
// 	for(var i=0; i<practiceKeys.length;i++){
// 		if(score==unlockScore1){
// 			alert("Good Job! You've unlocked a new character!");
// 		}
// 		alert("Type: " + practiceKeys[i]);
// 		answer = document.getElementById("message");
// 			//== for string comparison or .equals?
// 			if(answer==(practiceKeys[i])){
// 				randomString = positivity[Math.floor((Math.random() * positivity.length) + 1)];
// 				document.getElementById("bottext").innerHTML = randomString;
// 				score += 10; 
// 				document.getElementById("scoreboard").innerHTML = score; 
// 			}
// 			else{
// 				document.getElementById("bottext").innerHTML = "Uh oh! Looks like something is " + 
// 				"wrong. Try again!"; 
// 			}
// 	}
// });
	//typeChallenge();
/*function typeChallenge(){
	document.getElementById("response").innerHTML = ""
}*/