let checkIfPlay = confirm('Do you want to play a game?');
let range = 8, attempt = 3, yourPrize = 0, possiblePrize = 100, checkPlayAgain = true, four = 4, two = 2, zero = 0;
let hundred = 100, three = 3;
let randomNumber = Math.floor(Math.random()*range);
if (checkIfPlay === true) {
    while (checkPlayAgain === true) {
        while (attempt > 0) {
            let number = prompt('Enter a number from 0 to ' + range + '\n' +
                'Attempt left: ' + attempt + '\n' +
                'Total prize: ' + yourPrize + '\n' +
                'Possible prize on current attempt: ' + possiblePrize, '');
            if (number === null) {
                attempt = zero;
            }
            if (number !== null && number !== '' && Number(number) === randomNumber) {
                yourPrize += possiblePrize;
                alert('Congratulation, you won!  Your prize is:' + yourPrize + '$');
                checkPlayAgain = confirm('Do you want to continue?');
                attempt = zero;
                if (checkPlayAgain === true) {
                    attempt = three;
                    range += four;
                    possiblePrize *= two;
                }
            } else {
                attempt--;
                possiblePrize /= two;
            }
        }
        alert('Thank you for your participation. Your prize is:' + yourPrize + '$');
        yourPrize = zero;
        possiblePrize = hundred;
        checkPlayAgain = confirm('Do you want to play again?');
        attempt = three;
    }
}else {
    alert('You did not become a billionaire, but can');
    checkPlayAgain = false;
}

