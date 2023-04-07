//  0 - Rock
//  1 - Paper
//  2 - Scissors

function getComputerChoice() {
    return Math.floor(3 * Math.random());
}

function getPlayerChoice() {
    let choice;
    let invalid = true;

    while (invalid) {
        choice = prompt("Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        console.log(choice);

        switch (choice) {
            case "rock":
            case "paper":
            case "scissors":
                invalid = false;
                break;
            default:
                alert("Invalid Selection.")
        }
    }

    switch (choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            console.log("ERROR: getPlayerChoice() failed!");
            return null;
    }
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = ""

    for (i=1; i<=5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if (result != "DRAW!") {
            // add to score
            result = result.slice(4, 5);
            
            if (result === 'W') playerScore++
            else if (result === 'L') computerScore++
            else console.log("ERROR: Scoring in game()");
        }
    }
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);

    if (playerScore > computerScore) console.log("You won the game!")
    else if (playerScore < computerScore) console.log("You lost the game!")
    else console.log("It's a tie.  Try Again!");

    return null;
}