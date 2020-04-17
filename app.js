import { makeUser } from './make-user.js';

const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(myForm);

    const user = makeUser(formData);

    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem('USER', stringifiedUser);
});



