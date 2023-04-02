// get rock paper and scissors from html
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

// get display result from html
var displayResult = document.querySelector(".displayResult");
// var column1 = document.querySelector(".column1");
// var column2 = document.querySelector(".column2");
var playerScore = document.querySelector(".playerScore");
var computerScore = document.querySelector(".computerScore");

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
  let player = "rock";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});
// when click on paper, assign "paper" to playerChoice
paper.addEventListener("click", () => {
  let player = "paper";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});
//when click on scissors, assign "scissors" to playerChoice
scissors.addEventListener("click", () => {
  let player = "scissors";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

// play single round
//output result to console
function playRound(player, computer) {
  if (player == computer) {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You made the same choice. This is a draw";
  } else if (player == "rock" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You lose! Paper beats rock!";
  } else if (player == "rock" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You win! Rock beats scissors!";
  } else if (player == "paper" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You win! Paper beats rock";
  } else if (player == "paper" && computer == "scissors") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You lose! Scissors beats Paper";
  } else if (player == "scissors" && computer == "rock") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You lose! Rock beats Scissors";
  } else if (player == "scissors" && computer == "paper") {
    const playertag = document.createElement("p");
    const computertag = document.createElement("p");
    playertag.textContent = player;
    computertag.textContent = computer;
    playertag.classList.add("column1");
    computertag.classList.add("column2");
    playerScore.appendChild(playertag);
    computerScore.appendChild(computertag);
    return "You win! Scissors beats paper";
  } else {
    return "you made an invalid choice";
  }
}
