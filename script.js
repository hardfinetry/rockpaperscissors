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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        if (
            (humanSelection === "rock" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "rock")
        ) {
            console.log(`You chose ${humanSelection} and computer chose ${computerSelection}, you lose!`);
            computerScore += 1;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper") ||
            (humanSelection === "rock" && computerSelection === "scissors")
        ) {
            console.log(`You chose ${humanSelection} and computer chose ${computerSelection}, you win!`);
            humanScore += 1;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else {
            console.log(`You chose ${humanSelection} and computer chose ${computerSelection}, it's a draw!`);
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
    }

    playRound();

}

playGame();