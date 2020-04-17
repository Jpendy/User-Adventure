console.log('map page');

import { makeQuestLinks } from '../make-quest-links.js';
import quests from '../data/data.js';

const ul = document.getElementById('list');


quests.forEach((quest) => {
    const li = makeQuestLinks(quest);
    ul.appendChild(li);
});