

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create references for variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
// This function runs when a key is pressed
document.onkeyup = function (event) {
  var userGuess = event.key;

  // Randomly chose from the options array for the computers choice
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {
    wins++;
  } else {
    losses++;

  }
  guessesLeft--;

  //Create a variable to hold new HTML.

  var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + userGuess + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};