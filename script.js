let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    /* using math.random return
    string of "rock" if equal to 0 - 0.33
    string of "paper" if equal to 0.34 - 0.66
    string of "scissors" if equal to 0.67 - 1
     */
    let random = 0.66
    console.log("this is function console log " + random)
    if (random >= 0 & random <= 0.33) {
        console.log("rock")
        return "rock"
    }
    else if (random > 0.33 & random <= 0.66) {
        console.log("paper")
        return "paper"
    }
    else if (random > 0.66 & random <= 1) {
        console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper or Scissors?")
    console.log(humanChoice)
    return humanChoice
}



getComputerChoice()
getHumanChoice()