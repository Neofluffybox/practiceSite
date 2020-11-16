const header = document.querySelector(`header`);
header.classList.add(`container`);

const container = document.querySelector(`.container`);

const content = document.createElement(`div`);

content.textContent = `hello world`;

container.appendChild(content)

const article = document.querySelector('article');

const paragraph = document.createElement('p');

paragraph.style.color = 'red';
paragraph.innerHTML = 'Hey, I\'m red!'

article.appendChild(paragraph)

const h3 = document.createElement('h3');

h3.style.color = 'blue';

article.appendChild(h3)

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'background-color: pink; border: 2px solid #000');

const h1 = document.createElement('h1');
h1.innerHTML = 'I\'m in a div';

const paragraph2 = document.createElement('p');
paragraph2.innerHTML = 'ME TOO';

newDiv.appendChild(h1)
newDiv.appendChild(paragraph2)

article.appendChild(newDiv)