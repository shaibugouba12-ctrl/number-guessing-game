let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guess").value;
    attempts++;

    if (guess == secretNumber) {
        document.getElementById("result").textContent = "Correct! 🎉";
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent = "Too low! 🔽";
    } else {
        document.getElementById("result").textContent = "Too high! 🔼";
    }

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;
}

document.getElementById("guessButton")
    .addEventListener("click", checkGuess);
