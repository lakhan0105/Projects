// Selecting the Elements
const userInputFieldEl = document.querySelector(".user-input-field");
const resultEl = document.querySelector(".result-el");
const gameTitleEl = document.querySelector(".game-title-el");
const gameMessage = document.querySelector(".game-message");
const scoreEl = document.querySelector(".score-el");
const highScoreEl = document.querySelector(".highscore-el");
const checkBtn = document.querySelector(".check-btn");
const mainContainer = document.querySelector(".main-container");

let randomNumber;
let score = 20;
let highScore;
let previousHighScore;

scoreEl.textContent += score;

// Function to generate Random Number
const genRandomNumber = function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  return randomNumber;
};
genRandomNumber();
console.log(genRandomNumber());

// Function to update score
function updateScore() {
  score--;
  scoreEl.textContent = "Score:" + score;
}

// Function to update the message
function updateMessage(message) {
  return (gameMessage.textContent = message);
}

// Function to update HighScore
function updateHighScore() {
  highScoreEl.textContent = "Last HighScore:" + score;
  previousHighScore = score;
}

// Function to change bg-color
function changeBackground(color) {
  mainContainer.style.backgroundColor = color;
}

// Function to check Entered Input
function checkFunc() {
  if (userInputFieldEl.value >= 0 && userInputFieldEl.value <= 20) {
    if (randomNumber == userInputFieldEl.value) {
      resultEl.textContent = randomNumber;
      gameTitleEl.textContent = "Press Again Button, to Play Again";
      updateMessage("Correct Answer!");
      updateHighScore();
      disableCheckBtn();
      changeBackground("green");
    } else if (userInputFieldEl.value > randomNumber) {
      updateMessage("Too High!");
      updateScore();
      updateHighScore();
    } else if (userInputFieldEl.value < randomNumber) {
      updateMessage("Too Low!");
      updateScore();
      updateHighScore();
    }
  } else {
    updateMessage("Invalid Input");
  }
}

// Function for Play Again Button
function playAgain() {
  genRandomNumber();
  console.log(genRandomNumber());
  updateMessage("Start Guessing...");
  score = 20;
  scoreEl.textContent = "Score:" + score;
  highScoreEl.textContent = "HighScore:" + previousHighScore;
  resultEl.textContent = "?";
  gameTitleEl.textContent = "Guess My Number";
  userInputFieldEl.value = 0;
  checkBtn.removeAttribute("disabled", "disabled");
  changeBackground("rgb(40, 58, 58)");
}

// Function to disable the check button
function disableCheckBtn() {
  checkBtn.setAttribute("disabled", "disabled");
}
