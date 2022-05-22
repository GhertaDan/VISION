// Подключение функционала "Чертогов Фрилансера"
// import {
//     render
// } from "pug";
// import {
//     isMobile
// } from "./functions.js";
// // Подключение списка активных модулей
// import {
//     flsModules
// } from "./modules.js";



let favorite = document.querySelectorAll('.card__icon');
favorite.forEach(el => {
    el.addEventListener("click", e => {
        if (e.target.src == `http://${window.location.host}/img/icons/favorite.png`) {
            e.target.src = `http://${window.location.host}/img/icons/favorite_active.png`;
        } else if (e.target.src == `http://${window.location.host}/img/icons/favorite_active.png`) {
            e.target.src = `http://${window.location.host}/img/icons/favorite.png`;
        }
        e.preventDefault()
    })
});


