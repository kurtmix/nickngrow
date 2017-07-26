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
function start(){
	document.getElementById("response").innerHTML = "Hey friend! What's your name?";


}

function typeTest(){
	for(var i=0; i<practiceKeys.length;i++){
		if(score==unlockScore1){
			alert("Good Job! You've unlocked a new character!");
		}
		alert("Type: " + practiceKeys[i]);
		answer = document.getElementById("userInput");
			//== for string comparison or .equals?
			if(answer==(practiceKeys[i])){
				randomString = positivity[Math.floor((Math.random() * positivity.length) + 1)];
				document.getElementById("response").innerHTML = randomString;
				score += 10; 
				document.getElementById("scoreboard").innerHTML = score; 
			}
			else{
				document.getElementById("response").innerHTML = "Uh oh! Looks like something is " + 
				"wrong. Try again!"; 
			}
	}
	//typeChallenge();
}

/*function typeChallenge(){
	document.getElementById("response").innerHTML = ""
}*/
