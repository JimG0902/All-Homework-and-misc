var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guesses = [];
var wordBank = ["floor","walls", "facade", "drywall","windows","doors","carpet","countertop","closets","roof","hallway"];
var answerMask = [];
var random;

  function randomWord(){
      random = wordBank[Math.floor(Math.random() * wordBank.length)];
      document.getElementById("word").innerHTML = random;
      return random;
  };

  function dashedWord(){
    for (var i = 0; i < random.length; i++) {
        answerMask[i] = "_";
        document.getElementById("word").innerHTML = answerMask.join(" ");
    }
  };

  document.onkeyup = function(event){
      
  }

  randomWord();
  dashedWord();
