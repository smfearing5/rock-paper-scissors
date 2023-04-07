//  0 - Rock
//  1 - Paper
//  2 - Scissors

function getComputerChoice() {
    return Math.floor(3 * Math.random());
}

function intToRPS(num) {
    switch (num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "ERROR"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "DRAW!";
    }

    let compare = computerSelection - playerSelection;
    let str = ""

    switch (compare) {
        case 1:
        case -2:
            str = `You Lose! ${
                intToRPS(computerSelection)
            } beats ${
                intToRPS(playerSelection)
            }!`
            break;
        case 2:
        case -1:
            str = `You Win! ${
                intToRPS(playerSelection)
            } beats ${
                intToRPS(computerSelection)
            }!`
            break;
        default:
            str = "ERROR";
    }
    return str;
}