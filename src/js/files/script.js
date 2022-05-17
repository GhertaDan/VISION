// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

if (window.location.href.includes('register')) {
    let users = [];
    let form = document.getElementById("form");
    form.addEventListener('submit', e => {
        if (localStorage.getItem('user')) {
            users.push(JSON.parse(localStorage.getItem('user')))
        }
        let user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            pass: document.getElementById('pass').value,
            confirmPass: document.getElementById('confirmPass').value,
        }
        if (user.pass != user.confirmPass) alert('parola gresita')
        else {
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users));
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
        let users = JSON.parse(localStorage.getItem("users"));
        let user = users.find((el) => el.email === formData.email && el.pass === formData.pass);
        if (user) {
            window.location.href = 'home.html';
        }
        e.preventDefault()
    })
}

//? let users = JSON.parse(localStorage.getItem("users"));
//? let user = users.find(
//?     (el) => el.email === this.email && el.password === this.password
//? );
//? if (user) {
//?     console.log("success");
//? }