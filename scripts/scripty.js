const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#three');
const btn3 = document.querySelector('#five');
const btnR = document.querySelector(`#rock`);
const btnP = document.querySelector('#paper');
const btnSc = document.querySelector('#scissors');
const checkerBtn = document.querySelector('#checker');
let current = 0;
let pS = 0;
let cS = 0;
let cCh = document.querySelector('#cCh');
let outcome = document.querySelector('#outcome');
let intro = document.querySelector('.round');
let score = document.querySelector(`.score`);
intro.innerHTML = `Round: ${current}`;
cCh.innerHTML = 'Comp choice will appear here';
outcome.innerHTML = 'Round outcome here';

function results() {
    if (pS > cS) {
        alert('YOU WIN');
    } else if (pS < cS) {
        alert('YOU LOSE');
    } else {
        alert('IT\'S A TIE');
    };
    displayToggle('#set2');
    pS = 0, cS = 0;
    cCh.innerHTML = 'Comp choice will appear here';
    outcome.innerHTML = 'Round outcome here';
    return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
}

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

function setLimit(x) {
    return limit = x;
}

function roundTicker(z) {
    if (current < z) {
        current++;
        return intro.innerHTML = `Round: ${current}`;
    } else {
        current = 0
        return intro.innerHTML = `Round: ${current}`;
    }
}

function rock(y) {
    if (current < y) {
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
    } else {
        if (pS > cS) {
            alert('YOU WIN');
        } else if (pS < cS) {
            alert('YOU LOSE');
        } else {
            alert('IT\'S A TIE');
        };
        displayToggle('#set2');
        pS = 0, cS = 0;
        cCh.innerHTML = 'Comp choice will appear here';
        outcome.innerHTML = 'Round outcome here';
        return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
    };
}

function paper(y) {
    if (current < y) {
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
    } else {
        if (pS > cS) {
            alert('YOU WIN');
        } else if (pS < cS) {
            alert('YOU LOSE');
        } else {
            alert('IT\'S A TIE');
        };
        displayToggle('#set2');
        pS = 0, cS = 0;
        cCh.innerHTML = 'Comp choice will appear here';
        outcome.innerHTML = 'Round outcome here';
        return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
    }
}

function scissors(y) {
    if (current < y) {
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
    } else {
        if (pS > cS) {
            alert('YOU WIN');
        } else if (pS < cS) {
            alert('YOU LOSE');
        } else {
            alert('IT\'S A TIE');
        };
        displayToggle('#set2');
        pS = 0, cS = 0;
        cCh.innerHTML = 'Comp choice will appear here';
        outcome.innerHTML = 'Round outcome here';
        return score.innerHTML = `Player: ${pS} || Comp: ${cS}`;
    }
}

btn1.addEventListener('click', () => {
    displayToggle('#set2');
    setLimit(1);
});

btn2.addEventListener('click', () => {
    displayToggle('#set2');
    setLimit(3);
});

btn3.addEventListener('click', () => {
    displayToggle('#set2');
    setLimit(5);
});

btnR.addEventListener('click', () => {
    rock(limit);
    roundTicker(limit);
})
btnP.addEventListener('click', () => {
    paper(limit);
    roundTicker(limit);
})
btnSc.addEventListener('click', () => {
    scissors(limit);
    roundTicker(limit);
})

checkerBtn.addEventListener('click', () => {
    results();
})