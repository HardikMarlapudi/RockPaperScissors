let userScore = 0;
let computerScore = 0;

function rock() {
    const user = Math.floor(Math.random() * 3 + 1);
    if(user == rockItem) {
        alert("It's a tie!");
        return;
    } else if (user == paperItem) {
        computerScore++;
        alert("Computer wins! Paper beats Rock.");
        return;
    } else {
        userScore++;
        alert("You win! Rock beats Scissors.");
        document.getElementById("userScore").innerHTML = userScore;
        return;
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
