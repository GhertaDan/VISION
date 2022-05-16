// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

// const signUp = e => {
//     let formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         pass: document.getElementById('pass').value,
//         confirmPass: document.getElementById('confirmPass').value,
//     }
//     localStorage.setItem('formData', JSON.stringify(formData));
//     console.log(localStorage.getItem('formData'));
//     e.preventDefault();
// localStorage.getItem('')
// }

if (window.location.href.includes('register')) {
    let users = [];
    let form = document.getElementById("form");
    form.addEventListener('submit', e => {
        if (localStorage.getItem('formData')) {
            users.push(JSON.parse(localStorage.getItem('formData')))
        }
        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            pass: document.getElementById('pass').value,
            confirmPass: document.getElementById('confirmPass').value,
        }
        if (formData.pass != formData.confirmPass) alert('parola gresita')
        else {
            users.push(formData)
            localStorage.setItem('formData', JSON.stringify(users));
            console.log(localStorage.getItem('formData'));
        }
        e.preventDefault();
    })
}

if (window.location.href.includes('login')) {
    let login = document.getElementById('formLogin')
    let users = [];
    users.push(JSON.parse(localStorage.getItem('formData')))
    login.addEventListener('submit', e => {
        let formData = {
            email: document.getElementById('emailLogin').value,
            pass: document.getElementById('passLogin').value
        }
        console.log(users);
        let filtered = users.filter(el => el.email == formData.email && el.pass == formData.pass)
        users.filter(el => console.log(Object(el)))
        // console.log(filtered);
        e.preventDefault()
    })
}