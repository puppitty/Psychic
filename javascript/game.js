//variables for DOM elements
var numberWinsHTML = document.getElementById('number-wins');
var numberLossesHTML = document.getElementById('number-losses');
var guessesLeftHTML = document.getElementById('guesses-left');
var lettersGuessedHTML = document.getElementById('letters-guessed');
var computerGuessHTML = document.getElementById('computer-guess');

var resetButton = document.getElementById('reset-button');



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

var game = {
reWriteStats: function () {
  this.wins = 0;
  this.losses = 0;
  this.guessesLeft = 10;
  this.lettersGuessed = [];
  numberWinsHTML.textContent = 0;
  numberWinsHTML.textContent = 0;
  numberLossesHTML.textContent = 0;
  guessesLeftHTML.textContent = 10;
  lettersGuessedHTML.textContent = [];
  computerGuessHTML.textContent = "";

}}

// Creates an array that lists out all of the options (Guess the letter).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  lettersGuessed.push(userGuess);
  lettersGuessedHTML.textContent = this.lettersGuessed;

  // console.log(userGuess)

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {
    wins++;
    numberWinsHTML.textContent = this.wins;

  } else {
    losses++;
    numberLossesHTML.textContent = this.losses;

  }
  guessesLeft--;
  guessesLeftHTML.textContent = this.guessesLeft;
  lettersGuessed.join(", ");

  if (guessesLeft === 0) {
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    lettersGuessed = [];
  }
  
  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html = "<p>Guess what letter I'm thinking of: </p>" +
    "<p>Your choice: " + lettersGuessed.join(', ') + "</p>" +
    "<p>The computer's choice: " + computerGuess + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};

resetButton.addEventListener('click', game.reWriteStats);