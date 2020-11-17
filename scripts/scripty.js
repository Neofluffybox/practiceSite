const rps = document.querySelector('.rps');

const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#three');
const btn3 = document.querySelector('#five');
const choice = document.querySelector('.rps');
const btnr = document.createElement('input');
btnr.setAttribute('type', 'button');
btnr.setAttribute('id', 'rock');
btnr.setAttribute('name', 'rock');
const btnrlabel = document.createElement('label');
btnrlabel.setAttribute('for', 'rock');
btnrlabel.innerHTML = 'Rock';
const btnp = document.createElement('input');
btnp.setAttribute('type', 'button');
btnp.setAttribute('id', 'paper');
btnp.setAttribute('name', 'paper');
const btns = document.createElement('input');
btns.setAttribute('type', 'button');
btns.setAttribute('id', 'scissors');
btns.setAttribute('name', 'scissors');
function game(outOf) {
    for (i = 1; i <= outOf; i++) {
        let intro = document.querySelector('.round');
        intro.innerHTML = 'Round: ' + i;
        let choice;
        let options = ["rock", "paper", "scissors"];
        let rchoice = Math.floor(Math.random() * options.length);
        let player1 = choice.toLowerCase();
        let player2 = options[rchoice];
        alert("computer chose " + player2 + "!");
        if (player1 === player2) {
            alert("it's a tie!");
        } else if (player1 == "rock") {
            if (player2 == "paper") {
                alert("you lose!");
            } else if (player2 == "scissors") {
                alert("you win!");
            } else {
                alert("no game");
            };
        } else if (player1 == "paper") {
            if (player2 == "rock") {
                alert("you win!");
            } else if (player2 == "scissors") {
                alert("you lose!");
            } else {
                alert("no game");
            };
        } else if (player1 == "scissors") {
            if (player2 == "rock") {
                alert("you lose!");
            } else if (player2 == "paper") {
                alert("you win!");
            } else {
                alert("no game");
            };
        } else {
            alert("invalid input");
        };
    }
}

btn1.addEventListener('click', () => {
    game(1);
});

btn2.addEventListener('click', () => {
    game(3);
});

btn3.addEventListener('click', () => {
    game(5);
});