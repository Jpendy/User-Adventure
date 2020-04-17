import { uploadUser } from '../utils.js';

const user = JSON.parse(localStorage.getItem('USER'));
uploadUser(user);

import { makeQuestLinks } from '../make-quest-links.js';
import quests from '../data/data.js';

const ul = document.getElementById('list');


quests.forEach((quest) => {
    const li = makeQuestLinks(quest);
    ul.appendChild(li);
});