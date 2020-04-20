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
//const formButton = document.getElementById('form-button');
const resultSpan = document.getElementById('result-span');
const resultImage = document.getElementById('result-image');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(questId, quests);

img.src = '../assets/' + quest.image;
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

    resultSpan.textContent = choice.result;
    resultImage.src = '../assets/' + choice.image;

    updateStats(user, quest, choice);

    localStorage.setItem('USER', JSON.stringify(user));

    form.classList.toggle('hidden');

    const link = document.createElement('a');
    link.textContent = 'Go Back To Map';
    link.classList.add('linkStyle');
    resultSpan.appendChild(link);


    link.addEventListener('click', () => {        
        location.href = '../map/';
        
    });
    // updateStats(user, quest, choice);

    if (user.hp < 1){
        link.classList.add('hidden');
        const resultsLink = document.createElement('a');
        resultsLink.textContent = 'See Results';
        resultsLink.classList.add('linkStyle');
        resultSpan.appendChild(resultsLink);

        resultsLink.addEventListener('click', () => {
            location.href = '../results';
        });
    }    
});


