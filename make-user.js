
export function makeUser(form){
    const UserObject = {
        name: form.get('name'),
        class: form.get('class'),
        completed: {},
        hp: 100,
        gold: 3
    };
    return UserObject;
}