// get rock paper and scissors cards from html
var rockButton = document.querySelector(".rockCard");
var paperButton = document.querySelector(".paperCard");
var scissorsButton = document.querySelector(".scissorsCard");

// get Scoreboard from html
var showPlayerScore = document.querySelector(".playerScore");
var showComputerScore = document.querySelector(".computerScore");

var showPlayerScoreText = document.getElementById("player");
var showComputerScoreText = document.getElementById("computer");

//scoreboard and playerpoints
let playerPoints = 0;
let computerPoints = 0;

showPlayerScoreText.textContent = playerPoints;
showComputerScoreText.textContent = computerPoints;

//roundcounter
let roundCounter = 1;
let displayRounds = document.querySelector(".showRounds");
displayRounds.textContent = "Round " + roundCounter;

// function for computer to choose rock paper or scissors
let computerSelection = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// player plays game
function playGame() {
  roundCounter++;
  displayRounds.textContent = "Round : " + roundCounter;
  let player = this.querySelector("h3").innerText.toLowerCase(); // Access the innerText of h3 tag and convert to lower case
  let computer = computerSelection();
  playRound(player, computer);
  if (roundCounter == 6) {
    testWinner();
  }
}

// when click on rock, assign "rock" to playerChoice
rockButton.addEventListener("click", playGame);

// when click on paper, assign "paper" to playerChoice
paperButton.addEventListener("click", playGame);

//when click on scissors, assign "scissors" to playerChoice
scissorsButton.addEventListener("click", playGame);

let winner;

function testWinner() {
  if (playerPoints > computerPoints) {
    winner = "player";
    displayRounds.textContent = winner + " wins";
  } else if (playerPoints == computerPoints) {
    winner = "Draw";
    displayRounds.textContent = "it's a draw";
  } else {
    winner = "computer";
    displayRounds.textContent = winner + " wins";
  }

  rockButton.removeEventListener("click", playGame);
  paperButton.removeEventListener("click", playGame);
  scissorsButton.removeEventListener("click", playGame);

  var resetButton = document.createElement("button");
  var lineBreak = document.createElement("br");
  resetButton.textContent = "Reset Game";
  resetButton.addEventListener("click", () => {
    location.reload(); // This will refresh the page
  });
  displayRounds.appendChild(lineBreak);
  displayRounds.appendChild(resetButton);
}

function playRound(player, computer) {
  if (player == computer) {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("draw");
    computertag.classList.add("draw");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
  } else if (player == "rock" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    computerPoints++;
    showComputerScoreText.textContent = computerPoints; // Update the showPlayerScoreText element
  } else if (player == "rock" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    playerPoints++;
    showPlayerScoreText.textContent = playerPoints; // Update the showPlayerScoreText element
  } else if (player == "paper" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    playerPoints++;
    showPlayerScoreText.textContent = playerPoints; // Update the showPlayerScoreText element
  } else if (player == "paper" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    computerPoints++;
    showComputerScoreText.textContent = computerPoints; // Update the showPlayerScoreText element
  } else if (player == "scissors" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    computerPoints++;
    showComputerScoreText.textContent = computerPoints; // Update the showPlayerScoreText element
  } else if (player == "scissors" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    playerPoints++;
    showPlayerScoreText.textContent = playerPoints; // Update the showPlayerScoreText element
  }
}
