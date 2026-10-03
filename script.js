let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guess").value;

    if (guess === "") {
        document.getElementById("result").textContent =
            "⚠️ Enter a number first!";
        return;
    }

    attempts++;

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;

    if (guess == secretNumber) {
        document.getElementById("result").textContent =
            "🏆 You Won! 🎉";
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent =
            "Too low! 🔽";
    } else {
        document.getElementById("result").textContent =
            "Too high! 🔼";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;

    document.getElementById("guess").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent =
        "Attempts: 0";
}

document.getElementById("guessButton")
    .addEventListener("click", checkGuess);

document.getElementById("resetButton")
    .addEventListener("click", resetGame);
