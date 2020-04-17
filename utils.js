export function findById(idtoFind, arrayToSearch) { 
    for (let i = 0; i < arrayToSearch.length; i++) {
        const array = arrayToSearch[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}

export function uploadUser(user){

    const body = document.querySelector('body');
    const classSpan = document.createElement('h1');
    const nameSpan = document.createElement('h1');
    const healthSpan = document.createElement('h1');
    const goldSpan = document.createElement('h1');

    classSpan.id = 'classSpan';
    nameSpan.id = 'nameSpan';
    healthSpan.id = 'healthSpan';
    goldSpan.id = 'goldSpan';

    const playerStatsContainer = document.createElement('div');
    playerStatsContainer.classList.add('player-stats');

    classSpan.textContent = `Class: ${user.class}`;
    nameSpan.textContent = `Name: ${user.name}`;
    healthSpan.textContent = `Health: ${user.hp}`;
    goldSpan.textContent = `Gold: ${user.gold}`;

    playerStatsContainer.append(classSpan, nameSpan, healthSpan, goldSpan);
    body.appendChild(playerStatsContainer);
}


// export function updateStats(user) {
//     const 
//     user.hp += choice.hp;
//     user.gold += choice.gold;
//     user.completed[questId] = true;
// }




export function updateStats(user, quest, choice){
    const healthSpan = document.getElementById('healthSpan');
    const goldSpan = document.getElementById('goldSpan');

    user.hp = user.hp + choice.hp;
    user.gold = user.gold + choice.gold;
    user.completed[quest.id] = true;

    healthSpan.textContent = `Health: ${user.hp}`;
    goldSpan.textContent = `Gold: ${user.gold}`;
}