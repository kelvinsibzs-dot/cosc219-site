
/* COSC 219 - Lab 4
   JavaScript Fundamentals
   Word Guess Game
*/

const STARTING_LIVES = 6;

// 1. Normalize a guess
function normalizeGuess(input) {
  const guess = String(input).trim().toLowerCase();

  if (guess.length !== 1) {
    return "";
  }

  if (guess < "a" || guess > "z") {
    return "";
  }

  return guess;
}

// 2. Check if a guess is valid
function isValidGuess(input) {
  return normalizeGuess(input) !== "";
}

// 3. Check if a letter was already guessed
function alreadyGuessed(letter, guessedLetters) {
  return guessedLetters.toLowerCase().includes(
    letter.toLowerCase()
  );
}

// 4. Check if a letter is in the word
function isCorrect(letter, word) {
  const guess = normalizeGuess(letter);

  return guess !== "" &&
    word.toLowerCase().includes(guess);
}

// 5. Calculate remaining lives
function livesAfterGuess(lives, correct) {
  if (correct) {
    return lives;
  }

  return Math.max(0, lives - 1);
}

// 6. Calculate score
function scoreFor(word, lives = STARTING_LIVES) {
  return (word.length * 10) + (lives * 5);
}

// 7. Display game status
function statusMessage(word, guessedLetters, lives) {
  if (lives <= 0) {
    return `Out of lives. The word was "${word}".`;
  }

  if (hasWon(word, guessedLetters)) {
    return `You got it! "${word}" with ${lives} lives left.`;
  }

  const lifeWord = lives === 1 ? "life" : "lives";
  const guessed = guessedLetters || "nothing yet";

  return `${lives} ${lifeWord} left. Guessed: ${guessed}`;
}

// 8. Assign a grade
function gradeFor(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Provided helper functions - do not change
function revealWord(word, guessedLetters) {
  return word
    .toLowerCase()
    .replace(/[a-z]/g, (letter) =>
      guessedLetters.includes(letter) ? letter : "_");
}

function hasWon(word, guessedLetters) {
  return !revealWord(word, guessedLetters).includes("_");
}

// Part C - Questions


// 1. What happens if the two lines are swapped?
// Swapping these two lines does not change how the game works.
// The number of lives depends on whether the guess is correct,
// while guessedLetters keeps track of the letters entered.
// Both are updated before the game checks if the player has won.


// 2. Why does play.js call isValidGuess first?
// It checks that the input is valid before continuing.
// This stops empty or incorrect input from being processed
// as a guess.

