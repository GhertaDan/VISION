// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const signUp = e => {
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        pass: document.getElementById('pass').value,
        confirmPass: document.getElementById('confirmPass').value,
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
}