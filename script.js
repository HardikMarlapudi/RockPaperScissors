let displayResults = document.getElementById("displayResults");
let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function rock() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "It's a tie!";
    } else if (computerChoice === "paper") {
        document.getElementById("displayResults").innerHTML = "You Lose!";
        computerScore++;
    } else {
        document.getElementById("displayResults").innerHTML = "You Win!";
        playerScore++;
    }
    updateScore();
}

function paper() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "You Win!";
        playerScore++;
    } else if (computerChoice === "paper") {
        document.getElementById("displayResults").innerHTML = "It's a tie!";
    } else {
        document.getElementById("displayResults").innerHTML = "You Lose!";
        computerScore++;
    }
    updateScore();
}

function scissors() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "You Lose!";
        computerScore++;
    } else if(computerChoice === "paper") {
        document.getElementById("displayResults").innerHTML = "You Win!";
    } else {
        document.getElementById("displayResults").innerHTML = "It's a Tie!";
    }
    updateScore();
}

function updateScore() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}
