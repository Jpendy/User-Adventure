import { uploadUser } from '../utils.js';
import { makeQuestLinks } from '../make-quest-links.js';
import quests from '../data/data.js';
 
const user = JSON.parse(localStorage.getItem('USER'));
uploadUser(user);

const ul = document.getElementById('list');

quests.forEach((quest) => {
    const li = makeQuestLinks(quest);
    ul.appendChild(li);
});
