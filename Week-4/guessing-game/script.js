function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    let correctAnswer = false;
    let numberOfGuesses = 0;
    (function createPrompt() {
        if (numberOfGuesses >= totalGuesses) return 0;
        let answer = prompt(promptText);
        numberOfGuesses++;
        if (answer == null) {
            correctAnswer = false;
            return 0;
        } else if (Number(answer) > numToGuess) {
            promptText = `${answer} is too large, Guess a smaller number`;
        } else if (Number(answer) < numToGuess) {
            promptText = `${answer} is too small, Guess a smaller number`
        } else if (Number(answer) == numToGuess) {
            correctAnswer = true;
            return 0;
        } else if (!Number(answer)) {
            promptText = `Please enter a number`
        }
        !correctAnswer ? createPrompt() : "";
    })()
}
playGuessingGame(4, 4)