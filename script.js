let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let displayResults = document.getElementById("displayResults");

let playerScore = 0;
let computerScore = 0;

function rock() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "It's a tie!";
    } else if (computerChoice === "paper") {
        document.getElementById("displayResults").innerHTML = "You lose!";
        computerScore++;
    } else {
        document.getElementById("displayResults").innerHTML = "You win!";
        playerScore++;
    }
}

function paper() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "You win";
    } else if (computerChoice === "paper") {
        document.getElementById("displayResults").innerHTML = "It's a tie!";
    } else {
        document.getElementById("displayResults").innerHTML = "You lose!";
        computerScore++;
    }
}

function scissors() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === "rock") {
        document.getElementById("displayResults").innerHTML = "You lose!";
        computerScore++;
    } else if (computerScore === "paper") {
        document.getElementById("displayResults").innerHTML = "You win!";
        playerScore++;
    } else {
        document.getElementById("displayResults").innerHTML = "It's a tie!";
    }
}
