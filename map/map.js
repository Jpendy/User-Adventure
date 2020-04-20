import { uploadUser } from '../utils.js';
import { makeQuestLinks } from '../make-quest-links.js';
import quests from '../data/data.js';
 
const user = JSON.parse(localStorage.getItem('USER'));
uploadUser(user);

const ul = document.getElementById('list');

quests.forEach((quest) => {
    const li = makeQuestLinks(quest, user);
    ul.appendChild(li);
});

// makeResultLink(user);

// function makeResultLink(user){
//     if (user.completed === {
//         walker: true,
//         dragon: true,
//         fight: true
//     }) {
//         // location.href = '../results/';
//         const resultLink = document.createElement('a');
//         const body = document.querySelector('body');
//         resultLink.href = '../results/';
//         resultLink.id = 'quests-completed-link';
//         resultLink.textContent = 'All Quests Completed. Go To Results';
//         resultLink.style.background = 'blue';
//         body.appendChild(resultLink);

//     }
// }