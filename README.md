### Wordle.js

## Overview

This project is a web-based implementation of the popular word-guessing game **Wordle**. The player has 6 attempts to guess a 5-letter word. After each guess, the letters are color-coded to show how close the guess is to the correct word:
- **Green**: The letter is in the correct position.
- **Yellow**: The letter is in the word but in the wrong position.
- **Gray**: The letter is not in the word at all.

## Features

- **Random Word Selection**: A random word is chosen from a predefined list for the player to guess.
- **Color-Coded Feedback**: Letters are highlighted in green, yellow, or gray to indicate their correctness.
- **6 Attempts**: The player can make up to 6 guesses to solve the word puzzle.
- **Victory/Loss Message**: Displays a congratulatory message if the player wins or reveals the correct word if the player loses.
- **Interactive UI**: The game uses jQuery to dynamically update the game board with each guess.

## How to Play

1. **Start the Game**: The game starts with a random 5-letter word.
2. **Make a Guess**: Type or click letters to form a 5-letter word guess.
3. **Color Feedback**: After pressing "Enter", each letter will be highlighted:
   - **Green**: Correct letter in the correct position.
   - **Yellow**: Correct letter in the wrong position.
   - **Gray**: Incorrect letter.
4. **Win or Lose**: 
   - If you guess the word correctly within 6 tries, you win!
   - If not, the game will end after 6 rows, and the correct word will be revealed.

## Installation and Setup

### Requirements

- A browser with JavaScript enabled
- Basic HTML and jQuery support

### Steps

1. **Clone the Repository**: Download this project using:
   ```bash
   git clone https://github.com/yourusername/wordle-js.git
