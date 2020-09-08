//import quests from '../data/data.js';
import { uploadUser } from '../utils.js';
import { finalMessage } from '../utils.js';

const mainSection = document.getElementById('main-section');
const playAgainButton = document.getElementById('play-again-button');

const user = JSON.parse(localStorage.getItem('USER'));
uploadUser(user);

const p = document.createElement('p');
p.classList.add('final-message');

finalMessage(user, p);

playAgainButton.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../';
});

mainSection.appendChild(p);