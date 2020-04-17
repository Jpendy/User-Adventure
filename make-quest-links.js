//import { uploadUser } from "./utils";

export function makeQuestLinks(questData, user) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    //li.classList.add('quest-item');

    a.href = `../quest/?id=${questData.id}`;


    a.textContent = questData.title;
    a.style.float = 'right';
    li.style.position = 'absolute';
    li.style.top = questData.map.top;
    li.style.left = questData.map.left;
    
    if (user.completed[questData.id] === true) {
        a.style.textDecoration = 'line-through';
        a.textContent = questData.title;
        a.href = '';
      //  a.style.visibility = 'hidden';
        a.style.background = 'black';
    }

    li.appendChild(a);

    return li;
}