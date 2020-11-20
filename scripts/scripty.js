const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#three');
const btn3 = document.querySelector('#five');
const btnR = document.querySelector(`#rock`);
const btnP = document.querySelector('#paper');
const btnSc = document.querySelector('#scissors');
let current = 1;
let pS = 0;
let cS = 0;
let cCh = document.querySelector('#cCh');
let outcome = document.querySelector('#outcome');
let intro = document.querySelector('.round');
let score = document.querySelector(`.score`);
intro.innerHTML = `Round: ${current}`

function compChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function displayToggle(set) {
    var x = document.querySelector(set);
    if (x.style.display === "none") {
        x.style.display = `flex`;
    } else {
        x.style.display = `none`;
    };
}

function roundTicker() {
    current++;
    return intro.innerHTML = `Round: ${current}`;
}

function rock() {
    let comp = compChoice();
    if (comp == 'rock') {
        cCh.innerHTML = 'Comp chose rock!';
        outcome.innerHTML = 'It\'s a tie';
    } else if (comp == 'paper') {
        cCh.innerHTML = 'Comp chose paper!';
        outcome.innerHTML = 'You lose';
        cS++;
    } else {
        cCh.innerHTML = 'Comp chose scissors';
        outcome.innerHTML = 'You win';
        pS++;
    };
    return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
}

function paper() {
    let comp = compChoice();
    if (comp == 'rock') {
        cCh.innerHTML = 'Comp chose rock!';
        outcome.innerHTML = 'You win';
        pS++;
    } else if (comp == 'paper') {
        cCh.innerHTML = 'Comp chose paper!';
        outcome.innerHTML = 'It\'s a tie';
    } else {
        cCh.innerHTML = 'Comp chose scissors';
        outcome.innerHTML = 'You lose';
        cS++;
    };
    return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
}

function scissors() {
    let comp = compChoice();
    if (comp == 'rock') {
        cCh.innerHTML = 'Comp chose rock!';
        outcome.innerHTML = 'You lose';
        cS++;
    } else if (comp == 'paper') {
        cCh.innerHTML = 'Comp chose paper!';
        outcome.innerHTML = 'You win';
        pS++;
    } else {
        cCh.innerHTML = 'Comp chose scissors';
        outcome.innerHTML = 'It\'s a tie';
    };
    return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
}

btn1.addEventListener('click', () => {
    displayToggle('#set2');
});

btn2.addEventListener('click', () => {
    displayToggle('#set2');
});

btn3.addEventListener('click', () => {
    displayToggle('#set2');
});

btnR.addEventListener('click', () => {
    rock();
    roundTicker();
})
btnP.addEventListener('click', () => {
    paper();
    roundTicker();
})
btnSc.addEventListener('click', () => {
    scissors();
    roundTicker();
})