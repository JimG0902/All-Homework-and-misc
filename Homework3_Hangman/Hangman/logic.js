// Global Variables
// ========================================================
// Arrays 
var wordOptions = ["chevy", "ford", "dodge", "jeep", "volkswagen", "porsche", "ferrari"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0; 
var blanksAndSuccesses = [];   // v _ _ _ _ _ _ _ _ _
var wrongLetters = [];

var winCount = 0;
var lossCount = 0; 
var guessesLeft = 9; 

// FUNCTIONS (Reusable code blocks)
// ========================================================

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

// reset 
guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];

// populate blanks and successes with right number of blanks.
for (var i=0; i<numBlanks; i++){
	blanksAndSuccesses.push("_");
}

// Change HTML to reflect conditions
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount; 

	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	// Check if letter exists in code at all

	var isLetterInWord = false; 

	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true; 
		}
	}

	// Check where in word letter exists, then populate blanks..array
    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
		    if(selectedWord[i] == letter) {
			    blanksAndSuccesses[i] = letter; 
        }
    }
}
 
    // Letter wasn't found 
    else {
    	wrongLetters.push(letter);
    	guessesLeft--
    }

    // Testing and Debugging 
    console.log(blanksAndSuccesses);

}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + numGuesses);

    // Update the HTML to refect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    // Check if user won
    if (lettersinWord.toSting() == blanksAndSuccesses.toSting()) {
    	winCount++;
    	alert("You Won!");

    	// Update the win counter in the HTML
    	document.getElementById("winCounter").innerHTML = winCount;

    	startGame();
    }

    // Check if user won
    else if (guessesLeft == 0) {
    	lossCount++;
    	alert("You Lost!");

    	// Update the HTML
    	document.getElementById("lossCounter").innerHTML = lossCount;
    
        startGame();
     }
}
// MAIN PROCESSES
// =================================

// Initiates the code the 1st time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	//test and debugging 
	console.log(letterGuessed);
}

	
