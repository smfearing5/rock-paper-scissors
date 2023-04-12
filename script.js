const scoreText = document.querySelector("#score-text")
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const btnBox = document.querySelector("#btn-box");
const results = document.querySelector("#results");

let score = {
    player: 0,
    computer: 0
};
let buttons;
startGame();

// functions
function getComputerChoice() {
    return Math.floor(3 * Math.random());
}

function rpsToInt(rps) {
    rps = rps.toLowerCase();
    switch (rps) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            console.log("ERROR: rpsToInt() failed!");
            return null;
    }
}

//  0 - Rock
//  1 - Paper
//  2 - Scissors

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
    let str = "";

    switch (compare) {
        case 1:
        case -2:
            score.computer += 1;
            computerScore.textContent = score.computer;
            str = `You Lose! ${
                intToRPS(computerSelection)
            } beats ${
                intToRPS(playerSelection)
            }!`
            break;
        case 2:
        case -1:
            score.player += 1;
            playerScore.textContent = score.player;
            str = `You Win! ${
                intToRPS(playerSelection)
            } beats ${
                intToRPS(computerSelection)
            }!`
            break;
        default:
            str = "ERROR";
    }

    if (winner()) {
        return "Would you like to play again?"
    }
    else return str;
}

function winner() {
    if (score.player >= 5) {
        endGame("You WIN!");
        return true;
    }
    else if (score.computer >= 5) {
        endGame("You LOSE!")
        return true;   
    };

    return false;
}

function endGame(str) {
    scoreText.textContent = str;

    buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        btnBox.removeChild(button);
    });

    let newGame = document.createElement("button");
    newGame.setAttribute("id", "new-game");
    newGame.textContent = "New Game";
    newGame.addEventListener("click", () => startGame());

    btnBox.appendChild(newGame);
}

function startGame() {
    console.log("Starting a new game...")

    score.player = 0;
    score.computer = 0;
    playerScore.textContent = score.player;
    computerScore.textContent = score.computer;
    scoreText.textContent = "SCORE";
    results.textContent = "";

    buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        btnBox.removeChild(button);
    });

    let newButton;
    for (i=0; i<3; i++) {
        newButton = document.createElement("button");
        newButton.setAttribute("id", intToRPS(i).toLowerCase());
        newButton.textContent = intToRPS(i);
        newButton.addEventListener("click",  () => {
            results.textContent = playRound(rpsToInt(newButton.id), getComputerChoice());
        });
        btnBox.appendChild(newButton);
    };
};