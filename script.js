const humanChoiceButtons = document.querySelector("#humanChoiceButtons");
const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random();
    if (random >= 0 & random <= 0.33) {
        results.append("Computer chose rock");
        return "rock";
    }
    else if (random > 0.33 & random <= 0.66) {
        results.append("Computer chose paper");
        return "paper";
    }
    else if (random > 0.66 & random <= 1) {
        results.append("Computer chose scissors");
        return "scissors";
    }
};

function playRound(humanChoice) {
    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice();

    if (
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")
    ) {
        results.append(`You chose ${humanSelection} and computer chose ${computerSelection}, you lose!`);
        computerScore += 1;
        results.append(`Human score is ${humanScore} and Computer score is ${computerScore}`);
    }
    else if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        results.append(`You chose ${humanSelection} and computer chose ${computerSelection}, you win!`);
        humanScore += 1;
        results.append(`Human score is ${humanScore} and Computer score is ${computerScore}`);
    }
    else {
        results.append(`You chose ${humanSelection} and computer chose ${computerSelection}, it's a draw!`);
        results.append(`Human score is ${humanScore} and Computer score is ${computerScore}`);
    }
};

humanChoiceButtons.addEventListener("click", (event) => {
    playRound(event.target.id)
});
