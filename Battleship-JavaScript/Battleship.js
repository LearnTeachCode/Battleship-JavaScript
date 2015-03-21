// this function generates a random number between a specified minimum and maximum number
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// for our game, we'll pick a number from 1 to 5. This is where our "battleship" is.
var correctAnswer = getRandomNumber(1,5);

//start the game:
var userInput = parseInt(prompt("Let's play Battleship! To fire at a battleship, please enter another number from 1 to 5:"), 10);

// the game loop: keep asking the player to guess until they guess the right answer
while (userInput !== correctAnswer) {
  var userInput = parseInt(prompt("You missed! To fire again, please enter another number from 1 to 5:"), 10);
}

// the code below will only run when the game loop ends:
alert("You win! Battleship sunk!")