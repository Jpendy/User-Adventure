import quests from '../data/data.js';
import { findById } from '../utils.js';

console.log('quest page');

const radios = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const form = document.querySelector('form');
//const formButton = document.getElementById('form-button');


const img = document.getElementById('image');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(questId, quests);

document.querySelector('body').append(JSON.stringify(quest));

img.src = '../assets/quests/' + quest.image;



for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;

}



form.addEventListener('submit', (event) => {
    event.preventDefault();


   // const user = JSON.parse(localStorage.getItem('USER'));

    const data = new FormData(form);

    const choiceId = data.get('quest');
    const choices = quest.choices;

    console.log(choiceId);

    const choice = findById(choiceId, choices);
 
    const user = JSON.parse(localStorage.getItem('USER'));

    user.hp = user.hp + choice.hp;
    user.gold = user.gold + choice.gold;
    user.completed[quest.id] = true;

    localStorage.setItem('USER', JSON.stringify(user));
});

