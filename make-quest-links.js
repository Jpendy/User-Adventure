
export function makeQuestLinks(questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.classList.add('quest-item');

    a.href = `../quest/?id=${questData.id}`;

    a.textContent = questData.title;

    li.appendChild(a);

    return li;
}