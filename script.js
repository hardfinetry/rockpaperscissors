const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function getComputerChoice() {
    /* using math.random return
    string of "rock" if equal to 0 - 0.33
    string of "paper" if equal to 0.34 - 0.66
    string of "scissors" if equal to 0.67 - 1
     */
    let random = Math.random();
    console.log("this is random seed " + random);
    if (random >= 0 & random <= 0.33) {
        console.log("Computer chose rock");
        return "rock";
    }
    else if (random > 0.33 & random <= 0.66) {
        console.log("Computer chose paper");
        return "paper";
    }
    else if (random > 0.66 & random <= 1) {
        console.log("Computer chose scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper or Scissors?").toLowerCase();
    console.log("Human chose " + humanChoice);
    return humanChoice;
}

function playRound(getHumanChoice, getComputerChoice) {
    if (
        (getHumanChoice === "rock" && getComputerChoice === "paper") ||
        (getHumanChoice === "paper" && getComputerChoice === "scissors") ||
        (getHumanChoice === "scissors" && getComputerChoice === "rock")
    ) {
        console.log(`You chose ${getHumanChoice} and computer chose ${getComputerChoice}, you lose!`);
        computerScore +=1;
        console.log(`Computer score is ${computerScore} and human score is ${humanScore}`);
    }
    else if (
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
        (getHumanChoice === "rock" && getComputerChoice === "scissors")
    ) {
        console.log(`You chose ${getHumanChoice} and computer chose ${getComputerChoice}, you win!`);
        humanScore +=1;
        console.log(`Computer score is ${computerScore} and human score is ${humanScore}`);
    }
    else {
        console.log(`You chose ${getHumanChoice} and computer chose ${getComputerChoice}, it's a draw!`);
        console.log(`Computer score is ${computerScore} and human score is ${humanScore}`);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0   ;

}
// getComputerChoice()
// getHumanChoice()
playRound(humanSelection, computerSelection)