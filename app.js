//Author: Emily
//Version: 1.0

$(document).ready(function () {
    randomWord();
    $("button").click(function () {
        var letter = $(this).html();
        if (letter.length == 1) {
            updateGuess(letter);
        } else {
            return
        }
    });
});


function randomWord() {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    $('#answer').text(answer)
}

let answer
let guess = ""
let currentRow = 1
let currentLetter = 1


function updateGuess(letter) {
    if (currentLetter <= 5) {
        guess += letter
        // $('#guess').text(guess)
        let coordinate = currentRow.toString() + "-" + currentLetter.toString()
        $('#' + coordinate).text(letter);
        currentLetter += 1
        return guess
    }
}

function deleteLetter() {
    if (currentLetter > 1) {
        currentLetter -= 1
        let coordinate = currentRow.toString() + "-" + currentLetter.toString()
        $('#' + coordinate).text("");
        guess = guess.slice(0, -1)
        // $('#guess').text(guess)
        return guess;
    } else {
        return;
    }
}

function enter() {
    if (currentLetter == 6) {
        validateGuess()
        currentRow += 1
        currentLetter = 1
    } else {
        return
    }

}

function validateGuess() {
    let remainingLetters = answer;

    for (let i = 0; i <= 4; i++) {
        if (guess[i].toLowerCase() == answer[i]) {
            let coordinate = currentRow.toString() + "-" + (i + 1).toString();
            $('#' + coordinate).addClass('bg-success text-white');
            remainingLetters = remainingLetters.replace(guess[i].toLowerCase(), '');
        }
    }

    for (let i = 0; i <= 4; i++) {
        let coordinate = currentRow.toString() + "-" + (i + 1).toString();
        if ($('#' + coordinate).hasClass('bg-success')) { ; }
        else if (remainingLetters.includes(guess[i].toLowerCase())) {
            $('#' + coordinate).addClass('bg-warning text-white');
            remainingLetters = remainingLetters.replace(guess[i].toLowerCase(), '');
        } else {
            $('#' + coordinate).addClass('bg-secondary text-white');
        }
    }
    //Scenario where you win
    if (guess.toLowerCase() == answer) {
        $('#message').text("You win!!")
        $('button').addClass('disabled');
        guess = ""
        let animation = anime({
            targets: '#message',
            scale: [8, 1],
            opacity: [0, 1],
            rotateZ: [90, 0],
            easing: "easeOutCirc",
            duration: 700,
            delay: (el, i) => 80 * i,
            endDelay: 500
        });
    } else if (currentRow == 6 && guess.toLowerCase() != answer) {
        $('#message').text("You lose! The word was " + answer + ".")
        $('button').addClass('disabled');
    }
    guess = ""
}

//Adding this comment to test my automation