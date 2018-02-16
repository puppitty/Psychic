//variables for DOM elements
var numberWinsHTML = document.getElementById('number-wins');
var numberLossesHTML = document.getElementById('number-losses');
var guessesLeftHTML = document.getElementById('guesses-left');
var lettersGuessedHTML = document.getElementById('letters-guessed');
var computerGuessHTML = document.getElementById('computer-guess');

var resetButton = document.getElementById('reset-button');

// Creating variables to hold the number of wins, losses, and ties. They start at 0, except number of games.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

// Creates an array that lists out all of the letters (Guess the letter).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"];

var game = {
// Function to reset the game back to beginning
  reWriteStats: function () {
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    numberWinsHTML.textContent = 0;
    numberWinsHTML.textContent = 0;
    numberLossesHTML.textContent = 0;
    guessesLeftHTML.textContent = 10;
    lettersGuessedHTML.textContent = [];
    computerGuessHTML.textContent = "";

  }
}
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  lettersGuessed.push(userGuess);

  // Randomly chooses from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // checks UserGuess versus Computer guess. If equal, then add one to wins
  if (userGuess === computerGuess) {
    wins++;
    
// If doesn't match, then adds one to losses
  } else {
    losses++;
  }

  // Subtracts 1 from guesses left
  guessesLeft--;

  // Adds the guessed letter to the array
  lettersGuessed.join(", ");

// Checks to see if there are any guesses left. If not, then resets the values
  if (guessesLeft === 0) {
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    lettersGuessed = [];
  }

// Writes the values to the HTML for display
  var html = 
  numberWinsHTML.textContent = wins;
  numberLossesHTML.textContent = losses;
  guessesLeftHTML.textContent = guessesLeft;
  computerGuessHTML.textContent = computerGuess;
  lettersGuessedHTML.textContent = lettersGuessed.join(', ');
};

// Listens forhte reset button and changes all the values back to the beginnning values.
resetButton.addEventListener('click', game.reWriteStats);