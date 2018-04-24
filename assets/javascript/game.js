// all the words to choose from. 6 artists from the 90s
var wordList = [
["M", "C", "H", "A", "M", "M", "E", "R"],
  ["H","A","D","D","A","W","A","Y"],
  ["M","A","R","K","Y","M","A","R","K"],
  ["V","A","N","E","S","S","A","C","A","R","L","T","O","N"],
    ["J","A","M","I","R","O","Q","U","A","I"],
    ["N","E","W","R","A","D","I","C","A","L","S"]
]

// initialize keyPress
var keyPress = 0;

// initialize wins
var wins = 0;
// prints initial wins into the page
document.getElementById("wins").innerHTML = wins;

// initialize letters guessed 
var guessed = new Array();

// initialize guesses left
var guessesLeft = 10;
// prints initial wins into the page
document.getElementById("guessesleft").innerHTML = guessesLeft;

// picks a random number/index to later choose artist
var random = Math.floor((Math.random()*(wordList.length-1))); 

// artist chosen using random index 
var currentWord = wordList[random];
console.log("Answer is " + currentWord);

// create new array for blanks
var wordBlanks = new Array(currentWord.length);

// creates blanks for every letter in current word
for (var i = 0; i < wordBlanks.length; i++){
	wordBlanks[i] = "_ ";
}

// prints the blanks into the page
document.getElementById("currentword").textContent = wordBlanks;

// function to respond to key presses & converts to uppercase
document.addEventListener('keyup', function(event) {
    var keyPress = event.key;
    var upperCase = keyPress.toUpperCase();
    console.log(upperCase);

//checks if the the letter provided by the user matches one or more of the letters in the word
for (var i = 0; i < currentWord.length; i++){
  if(currentWord[i] === upperCase){
    wordBlanks[i] = upperCase + " ";
          document.getElementById("currentword").textContent = wordBlanks;
  }
  else if(currentWord[i] !== upperCase){
    guessed.push(upperCase);
    document.getElementById("guessed").textContent = guessed;
    guessesLeft--;
    document.getElementById("guessesleft").textContent = guessesLeft;
  }
  }
if(wordBlanks.indexOf("_ ")===-1){
  console.log("you win!");
  wins++;
  document.getElementById("wins").textContent = wins;
}
// closing to line 51
}, false);

// document.onkeyup = function(event){
//     htmlId.textContent = event.key
// }







// //checks if the the letter provided by the user matches one or more of the letters in the word
// var pruefeZeichen = function(){
// 	var f = document.rateformular; 
// 	var b = f.elements["ratezeichen"]; 
// 	var zeichen = b.value; // the letter