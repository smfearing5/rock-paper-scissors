function getComputerChoice() {
    let num = Math.floor(3 * Math.random());
    
    switch (num) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        default:
            return "Scissors";
    }
}