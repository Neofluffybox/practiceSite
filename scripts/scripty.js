const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#three');
const btn3 = document.querySelector('#five');
const btnR = document.querySelector(`#rock`);
const btnP = document.querySelector('#paper');
const btnSc = document.querySelector('#scissors');
const set1 = "#set1";

function displayToggle(set) {
    var x = document.getElementById(set);
    if (x.style.display === "none") {
        x.style.display = `flex`;
    } else {
        x.style.display = `none`;
    };
}

function compChoice() {
    let options = ["rock", "paper", "scissors"];
    let rchoice = Math.floor(Math.random() * options.length);
    return rchoice
}

function game(outOf) {
    for (i = 1; i <= outOf; i++) {
        let intro = document.querySelector('.round');
        intro.innerHTML = `Round: ${i}`;
        let player2 = compChoice();
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
    displayToggle(set1);
});

btn2.addEventListener('click', () => {
    displayToggle(set1);
    game(3);
});

btn3.addEventListener('click', () => {
    displayToggle(set1);
    game(5);
});