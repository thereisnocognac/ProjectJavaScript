const pContainer = document.querySelector('body');
const h3Container = document.querySelector('body');
const divContainer = document.querySelector('body');

const para = document.createElement('p');
const headerThree = document.createElement('h3');
const div = document.createElement('div');
const headerOne = document.createElement('h1');
const para2 = document.createElement('p');

para.classList.add('para');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

pContainer.appendChild(para);

para2.classList.add('para2');
para.textContent = 'ME TOO!'

headerOne.textContent = 'I\'m in a div!'


headerThree.classList.add('headerThree');
headerThree.textContent = 'I\'m a blue!';
headerThree.style.color = 'blue';

h3Container.appendChild(headerThree);

div.classList.add('div');
div.setAttribute('style', 'background: pink; border: 1px solid black;');
div.appendChild(headerOne, para2);
divContainer.appendChild(div);




