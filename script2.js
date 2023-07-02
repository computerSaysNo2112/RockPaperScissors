// get rock paper and scissors cards from html
var rockButton = document.querySelector(".rockCard");
var paperButton = document.querySelector(".paperCard");
var scissorsButton = document.querySelector(".scissorsCard");

// get Scoreboard from html
var showPlayerScore = document.querySelector(".playerScore");
var showComputerScore = document.querySelector(".computerScore");

var showPlayerScoreText = document.getElementById("player");
var showComputerScoreText = document.getElementById("computer");

// play single round
//output result to console
let roundCounter = 0;
let displayRounds = document.querySelector(".showRounds");

if (roundCounter == 0) {
  displayRounds.textContent = "";
} else {
  displayRounds.textContent = roundCounter;
}

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

// when click on rock, assign "rock" to playerChoice
rockButton.addEventListener("click", () => {
  roundCounter++;
  let player = "rock";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

// when click on paper, assign "paper" to playerChoice
paperButton.addEventListener("click", () => {
  roundCounter++;
  let player = "paper";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

//when click on scissors, assign "scissors" to playerChoice
scissorsButton.addEventListener("click", () => {
  roundCounter++;
  let player = "scissors";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

let playerPoints = 0;
let computerPoints = 0;

showPlayerScoreText.textContent = playerPoints;
showComputerScoreText.textContent = computerPoints;

let winner;

function testWinner() {
  if (showPlayerScoreText > computerPoints) {
    winner = "player";
  } else {
    winner = "Computer";
  }
  return winner;
}

function playRound(player, computer) {
  displayRounds.textContent = "Round : " + roundCounter;
  if (roundCounter == 5) {
    testWinner();
    alert("Winner is " + winner);
  }
  if (player == computer) {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("draw");
    computertag.classList.add("draw");
    showPlayerScore.appendChild(playertag);
    showComputerScore.appendChild(computertag);
    return "You made the same choice. This is a draw";
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
    return "You lose! Paper beats rock!";
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
    return "You win! Rock beats scissors!";
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
    return "You win! Paper beats rock";
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
    return "You lose! Scissors beats Paper";
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
    return "You lose! Rock beats Scissors";
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
    return "You win! Scissors beats paper";
  } else {
    return "you made an invalid choice";
  }
}
