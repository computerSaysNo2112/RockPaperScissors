//Generates random number between 0 and 150.
// Returns either rock, paper, scissor based on random number
let computerChoice = function computerPlay() {
  let randomNum = Math.floor(Math.random() * 150);
  if (randomNum >= 0 && randomNum <= 50) {
    return "rock";
  } else if (randomNum >= 51 && randomNum <= 100) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playerChoice = function () {
  return prompt("Rock Paper or Scissors?");
};

// let playerChoice = "rock"

//Play single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You made the same choice. This is a draw";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "paper"
  ) {
    return "You lose! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    return "You win! Rock beats scissors!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    return "You win! Paper beats rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    return "You lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    return "You lose! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    return "You win! Scissors beats paper";
  } else {
    return "you made an invalid choice";
  }
}

// Plays 5 rounds and decides the winner
function game() {
  //counters
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i <= 4; i++) {
    let result = playRound(playerChoice(), computerChoice());
    console.log(result);

    if (
      result == "You lose! Paper beats rock!" ||
      result == "You lose! Scissors beats Paper" ||
      result == "You lose! Rock beats Scissors" ||
      result == "you made an invalid choice"
    ) {
      computerScore++;
    } else if (result == "You made the same choice. This is a draw") {
    } else {
      playerScore++;
    }

    console.log("computer score:" + computerScore);
    console.log("player score:" + playerScore);
  }

  if (computerScore > playerScore) {
    console.log("you lose this match");
  } else if (computerScore == playerScore) {
    console.log("this is a draw");
  } else {
    console.log("you win this round");
  }
}

game();
