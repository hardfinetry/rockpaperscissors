const humanChoiceButtons = document.querySelector("#humanChoiceButtons");
const results = document.querySelector("#results");
const humanScoreId = document.querySelector("#humanScoreId");
const computerScoreId = document.querySelector("#computerScoreId");
const humanChose = document.querySelector("#humanChose");
const computerChose = document.querySelector('#computerChose');
const isGameOver = document.querySelector("#isGameOver");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random();
    if (random >= 0 && random <= 0.33) {
        return "rock";
    }
    else if (random > 0.33 && random <= 0.66) {
        return "paper";
    }
    else if (random > 0.66 && random <= 1) {
        return "scissors";
    }
};

function playRound(humanChoice) {
    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice();
    humanChose.textContent = `You chose ${humanSelection}`;
    computerChose.textContent = `Computer chose ${computerSelection}`;

    if (
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        humanScoreId.textContent = "Human Score: " + humanScore;
        computerScoreId.textContent = "Computer Score: " + computerScore;
    }
    else if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        humanScore += 1;
        humanScoreId.textContent = "Human Score: " + humanScore;
        computerScoreId.textContent = "Computer Score: " + computerScore;
    }

    if (humanScore == 5 || computerScore == 5) {
        isGameOver.textContent = "Game Over!"
    }
};

humanChoiceButtons.addEventListener("click", (event) => {
    playRound(event.target.id);
});