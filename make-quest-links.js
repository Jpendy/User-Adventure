
export function makeQuestLinks(questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    //li.classList.add('quest-item');

    a.href = `../quest/?id=${questData.id}`;


    a.textContent = questData.title;

    a.style.position = 'absolute';
    a.style.top = questData.map.top;
    a.style.left = questData.map.left;
    

    li.appendChild(a);

    return li;
}