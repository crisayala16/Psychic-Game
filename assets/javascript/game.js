$(document).ready(function() {
letters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var loses = 0;
var guessLeft = 9;
var guessSoFar = [];
var winsOutput = $("#wins-output");
var losssesOutput = $("#losses-output");
var guessLeftOutput = $("#guess-left-output");
var guessSoFarOutput = $("#guess-so-far-output");
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);
document.onkeyup = function(event){
var guess = event.key;
function reset(){
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	guessSoFar = [];
	guessLeft = 9;
	console.log(randomLetter);
}

if(guess !== randomLetter && guessSoFar.indexOf(guess) === -1){
	guessLeft--;
}
if(guessSoFar.indexOf(guess) === 0){
	guessLeft = guessLeft;
}
else if(guessSoFar.indexOf(guess) === -1){
	guessSoFar.push(guess);
}
if(guess === randomLetter){
	reset();
	wins++;
}
if(guessLeft === 0){
	reset();
	loses++;
}
winsOutput.html(wins);
losssesOutput.html(loses);
guessLeftOutput.html(guessLeft);
guessSoFarOutput.html(guessSoFar);
}
});
