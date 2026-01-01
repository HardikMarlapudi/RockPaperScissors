let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
        alert(`You win! ${userChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        alert(`Computer wins! ${computerChoice} beats ${userChoice}.`);
    }
}

document.getElementById("rockItem").onclick = () => play("rock");
document.getElementById("paperItem").onclick = () => play("paper");
document.getElementById("scissorItem").onclick = () => play("scissors");
