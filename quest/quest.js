import quests from '../data/data.js';
import { findById } from '../utils.js';
import { uploadUser } from '../utils.js';
import { updateStats } from '../utils.js';

const user = JSON.parse(localStorage.getItem('USER'));
uploadUser(user);

const radios = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const form = document.querySelector('form');
const description = document.getElementById('description');
const img = document.getElementById('image');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(questId, quests);

img.src = '../assets/quests/' + quest.image;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const choiceId = data.get('quest');
    const choices = quest.choices;
    const choice = findById(choiceId, choices);

    description.textContent = choice.result;

    updateStats(user, quest, choice);

    localStorage.setItem('USER', JSON.stringify(user));
});


