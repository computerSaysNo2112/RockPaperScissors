// get rock paper and scissors cards from html
var rock = document.querySelector(".rockCard");
var paper = document.querySelector(".paperCard");
var scissors = document.querySelector(".scissorsCard");

// get Scoreboard from html
var playerScore = document.querySelector(".playerScore");
var computerScore = document.querySelector(".computerScore");

var pointsPlayer = document.getElementById("player");
var pointsComputer = document.getElementById("computer");

// play single round
//output result to console
let roundCounter = 0;
let scoreMessage = document.querySelector(".scoreMessage");

if (roundCounter == 0) {
  scoreMessage.textContent = "";
} else {
  scoreMessage.textContent = roundCounter;
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
rock.addEventListener("click", () => {
  roundCounter++;
  if (roundCounter > 5) {
    alert("stoooop");
  } else {
    let player = "rock";
    let computer = computerSelection();
    let result = playRound(player, computer);
    console.log(result);
  }
});

// when click on paper, assign "paper" to playerChoice
paper.addEventListener("click", () => {
  roundCounter++;
  if (roundCounter > 5) {
    alert("stoooop");
  } else {
    let player = "paper";
    let computer = computerSelection();
    let result = playRound(player, computer);
    console.log(result);
  }
});

//when click on scissors, assign "scissors" to playerChoice
scissors.addEventListener("click", () => {
  roundCounter++;
  if (roundCounter > 5) {
    alert("stoooop");
  } else {
    let player = "scissors";
    let computer = computerSelection();
    let result = playRound(player, computer);
    console.log(result);
  }
});

let playerPoints = 0;
let computerPoints = 0;

pointsPlayer.textContent = playerPoints;
pointsComputer.textContent = computerPoints;

function playRound(player, computer) {
  scoreMessage.textContent = "Round : " + roundCounter;
  if (player == computer) {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("draw");
    computertag.classList.add("draw");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You made the same choice. This is a draw";
  } else if (player == "rock" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    computerPoints++;
    pointsComputer.textContent = computerPoints; // Update the pointsPlayer element
    return "You lose! Paper beats rock!";
  } else if (player == "rock" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    playerPoints++;
    pointsPlayer.textContent = playerPoints; // Update the pointsPlayer element
    return "You win! Rock beats scissors!";
  } else if (player == "paper" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    playerPoints++;
    pointsPlayer.textContent = playerPoints; // Update the pointsPlayer element
    return "You win! Paper beats rock";
  } else if (player == "paper" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    computerPoints++;
    pointsComputer.textContent = computerPoints; // Update the pointsPlayer element
    return "You lose! Scissors beats Paper";
  } else if (player == "scissors" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("lose");
    computertag.classList.add("win");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    computerPoints++;
    pointsComputer.textContent = computerPoints; // Update the pointsPlayer element
    return "You lose! Rock beats Scissors";
  } else if (player == "scissors" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("win");
    computertag.classList.add("lose");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    playerPoints++;
    pointsPlayer.textContent = playerPoints; // Update the pointsPlayer element
    return "You win! Scissors beats paper";
  } else {
    return "you made an invalid choice";
  }
}
