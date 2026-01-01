let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
    userScore++;
    document.getElementById("userScore").innerHTML = userScore;
    alert(`You Win! ${userChoice} defeats ${computerChoice}.`);
    } else {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        alert(`You Lose! ${computerChoice} defeats ${userChoice}.`);
    }
}

document.getElementById("rockItem").onclick = () => play("Rock");
document.getElementById("paperItem").onclick = () => play("Paper");
document.getElementById("scissorItem").onclick = () => play("Scissors");
