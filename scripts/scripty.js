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
intro.innerHTML = `Round: ${current}`;
let score = document.querySelector(`.score`);
score.innerHTML = `Player: ${pS} || Comp: ${cS}`;


function displayToggle(set) {
    var x = document.querySelector(set);
    if (x.style.display === "none") {
        x.style.display = `flex`;
    } else {
        x.style.display = `none`;
    };
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
    let compSelection = Math.floor(Math.random() * 3);
    if (compSelection == 0) {
        cCh.innerHTML = `Comp chose rock too!`;
    } else if (compSelection == 1) {
        cCh.innerHTML = 'Comp chose paper!';
    } else {
        cCh.innerHTML = 'Comp chose scissors!';
    };
});

btnP.addEventListener('click', () => {
    let compSelection = Math.floor(Math.random() * 3);
    if (compSelection == 0) {
        cCh.innerHTML = `Comp chose paper too!`;
    } else if (compSelection == 1) {
        cCh.innerHTML = 'Comp chose rock!';
    } else {
        cCh.innerHTML = 'Comp chose scissors!';
    };
});

btnSc.addEventListener('click', () => {
    let compSelection = Math.floor(Math.random() * 3);
    if (compSelection == 0) {
        cCh.innerHTML = `Comp chose scissors too!`;
    } else if (compSelection == 1) {
        cCh.innerHTML = 'Comp chose rock!';
    } else {
        cCh.innerHTML = 'Comp chose paper!';
    };
});