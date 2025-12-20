let userScore = 0;
let computerScore = 0;
let user = document.getElementById("user");
let computer = document.getElementById("computer");
let rockItem = document.getElementById("rockItem");
let paperItem = document.getElementById("paperItem");
let scissorItem = document.getElementById("scissorItem");

function rock() {
    const user = Math.floor(Math.random() * 3 + 1);
    if(user == rockItem) {
        alert("It's a tie!");
    } else if (user == paperItem) {
        computerScore++;
        alert("Computer wins!");
    } else {
        userScore++;
        alert("You win!");
        document.getElementById("userScore").innerHTML = userScore++;
    }
}

function paper() {
    const user = Math.floor(Math.random() * 3 + 1);
    if (user == rockItem) {
        userScore++;
        alert("You win! Paper beats rock.");
        return;
    } else if (user == paperItem) {
        alert("It's a tie!");
        return;
    } else {
        alert("Computer wins! Scissors beats paper.");
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
}

function scissors() {
    const user = Math.floor(Math.random() * 3 + 1);
    if (user == rockItem) {
        alert("Computer wins! Rock beats scissors.");
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore++;
        return;
    } else if (user == paperItem) {
        alert("You win! Scissors beats paper.");
        userScore++;
        document.getElemetnById("userScore").innerHTML = userScore++;
        return;
    } else {
        alert("It's a tie!");
        return;
    }
}
