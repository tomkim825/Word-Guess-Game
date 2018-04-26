// all the info in object. 6 artists from the 90s

var database90s = [{
  "array":["M", "C", "H", "A", "M", "M", "E", "R"],
  "songinfo": "MC Hammer - U Can't Touch This",
  "audio":"./assets/audio/hammer.mp3",
  "image":"./assets/images/hammer.jpg"
  },
  {
  "array":["E","A","G","L","E","E","Y","E","C","H","E","R","R","Y"],  
  "songinfo": "Eagle Eye Cherry - Save Tonight",
  "audio":"./assets/audio/Eagle.mp3",
  "image":"./assets/images/eagleeye.jpg"
  },
  {
  "array": ["H","A","D","D","A","W","A","Y"],
  "songinfo": "Haddaway - What is love?",
  "audio":"./assets/audio/WhatIsLove.mp3",
  "image":"./assets/images/haddaway.jpg"
  },  
  {
  "array":["R","E","A","L","M","C","C","O","Y"],
  "songinfo": "Real McCoy - Another Night",
  "audio":"./assets/audio/McCoy.mp3",
  "image":"./assets/images/mccoy.jpg"
  },
  {
  "array": ["V","A","N","E","S","S","A","C","A","R","L","T","O","N"],
  "songinfo": "Vanessa Carlton - 1000 miles",
  "audio":"./assets/audio/1000miles.mp3",
  "image":"./assets/images/carlton.jpg"
  }, 
  {
  "array":  ["J","A","M","I","R","O","Q","U","A","I"],
  "songinfo": "Jamiroquai - Virtual Insanity",
  "audio":"./assets/audio/VirtualInsanity.mp3",
  "image":"./assets/images/jamiroquai.jpg"
  }];    
    
// key presses will need to filter though alphabet to count as a guess
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k",
  "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// initialize keyPress
var keyPress = 0;

// initialize wins
var wins = 0;
// prints initial wins into the page
document.getElementById("wins").textContent = wins;

// initialize letters guessed & print to page
var guessed = [];
document.getElementById("guessed").textContent = guessed + "--";

// initialize guesses left & print to page
var guessesLeft = 10;
document.getElementById("guessesleft").textContent= guessesLeft;

// picks a random number/index to later choose artist. Increased chances of last artist by 30%
var random = Math.floor((Math.random()*1.3*(database90s.length-1))); 

// artist chosen using random index. Answer on console log
var currentWord = database90s[random].array;
console.log("Answer is " + currentWord.join(""));

 // create new array for blanks
  var initialBlanks = new Array(currentWord.length);

  // creates blanks for every letter in current word
  for (var i = 0; i < initialBlanks.length; i++){
	initialBlanks[i] = "_ ";
}

// prints the inital blanks into the page
document.getElementById("currentword").textContent = initialBlanks;

// initial track info
var nowPlaying = "X-Men Animated Series Theme";
var audio = new Audio('./assets/audio/xmen.mp3#t=2');

document.addEventListener('keyup', function(event) {
  if (event.key == "Enter"){
  audio.play();
  document.getElementById("nowplaying").textContent = nowPlaying;
  document.getElementById("nowplayingimage").src = "assets/images/xmen.jpg";
  document.getElementById("nowplayingimage").alt = "90s artist";   
  document.getElementById("start").textContent = "";
  }
});
// **  ABOVE IS CODE NEEDED FOR INITIAL SETUP OF PAGE **
// *****************************************************
// **          BELOW IS ACTUAL GAMEPLAY               **

// function to check if valid alphabet key and convert keypresses to uppercase 
document.addEventListener('keyup', function(event) {
    var guess = event.key.toUpperCase();
    if((alphabet.indexOf(event.key) !== -1) && (guessed.indexOf(event.key.toUpperCase()) == -1)){
// if valid key pressed, then below code can run
// **********************************************
    for (var i = 0; i < currentWord.length; i++) {
      if(currentWord[i] === guess) {
        initialBlanks[i] = guess + " ";
        document.getElementById("currentword").textContent = initialBlanks.join("");
        var correct = true;
      }
    }
      //  if the word is not correct, it will add it to the guessed field and take off a guesses left
    if(!correct) {
    guessed.push(guess);
    document.getElementById("guessed").textContent = guessed;
    guessesLeft--;
    document.getElementById("guessesleft").textContent = guessesLeft;  
    };
// conditionals to make the hangman appear from initial display:none
    if(guessesLeft === 9){
      document.getElementById("post").style.opacity = 1;
    };
    if(guessesLeft === 8){
      document.getElementById("topcrook").style.opacity = 1;
    };
    if(guessesLeft === 7){
      document.getElementById("noose").style.opacity = 1;
    };
    if(guessesLeft === 6){
      document.getElementById("head").style.opacity = 1;
    };
    if(guessesLeft === 5){
      document.getElementById("body").style.opacity = 1;
    };
    if(guessesLeft === 4){
      document.getElementById("leftarm").style.opacity = 1;
    };
    if(guessesLeft === 3){
      document.getElementById("rightarm").style.opacity = 1;
    };
    if(guessesLeft === 2){
      document.getElementById("leftleg").style.opacity = 1;
    };
    if(guessesLeft === 1){
      document.getElementById("rightleg").style.opacity = 1;
    };
    if(guessesLeft === 0){
      document.getElementById("deadeye1").style.display = "block";
      document.getElementById("deadeye2").style.display = "block";
      document.getElementById("start").textContent = "GAME OVER. Refresh page to play again"; 
      document.getElementById("gameover").style.display = "block";
      audio.src = './assets/audio/chill.mp3';
      audio.play();  
    };
    //**************************************** 
    // Terminate section: if all blanks are answered, you win
    if(initialBlanks.indexOf("_ ") === -1){
    console.log("you win!");
    wins++;
    document.getElementById("wins").textContent = wins;
    document.getElementById("start").textContent = "You Won! Press ENTER to play Again";
    // escape back to beginning if they press ENTER
    document.addEventListener('keyup', function(event) {
      if ((event.key == "Enter") && (initialBlanks.indexOf("_ ") === -1)){
          // reset guesses left and print to screen
    guessesLeft = 10;
    document.getElementById("guessesleft").textContent= guessesLeft;
    // reset wrong guesses and print to screen
    guessed = [];
    document.getElementById("guessed").textContent = guessed + "--"; 
    // reset initalBlanks/clear the answer
    initialBlanks = ["_ "];
    // plays audio track of correct song & updates the now playing field
    audio.pause();
    audio.src = database90s[random].audio;
    audio.play();
    nowPlaying = database90s[random].songinfo;
    document.getElementById("nowplaying").textContent = nowPlaying;
    document.getElementById("nowplayingimage").src = database90s[random].image;
    // picks a new random number/index for next challenge. increase last answer odds by 10%
    random = Math.floor((Math.random()*1.1*(database90s.length)));
    // reassign currentword to new random one
    
    currentWord = database90s[random].array;
    console.log("Answer is " + currentWord.join(""));
    
    // create new array for blanks
    initialBlanks = new Array(currentWord.length);
    
    // creates blanks for every letter in current word
    for (var i = 0; i < initialBlanks.length; i++){
      initialBlanks[i] = "_ ";
    }

    // prints the inital blanks into the page
    document.getElementById("currentword").textContent = initialBlanks;
    
    // reset hangman picture
        document.getElementById("post").style.opacity = 0.1;
        document.getElementById("topcrook").style.opacity = 0.1;
        document.getElementById("noose").style.opacity = 0.1;
        document.getElementById("head").style.opacity = 0.1;
        document.getElementById("body").style.opacity = 0.1;
        document.getElementById("leftarm").style.opacity = 0.1;
        document.getElementById("rightarm").style.opacity = 0.1;
        document.getElementById("leftleg").style.opacity = 0.1;
        document.getElementById("rightleg").style.opacity = 0.1;
    

      } 
    });
    // end of code bracket for event listener for you win

    };
// ***************************************
// end of code block for valid key presses
   };
  });

 

// hint: use below to manipulate DOM
// *************************************
// document.onkeyup = function(event){
//      document.getElementById("htmlId").textContent = event.key;
// };
// 
// or...
// 
// document.addEventListener('keyup', function(event) {
//      document.getElementById("htmlId").textContent = event.key;
// };
