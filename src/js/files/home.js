let product = document.querySelectorAll(".card__img");
product.forEach(el => {
    el.addEventListener("click", e => {
        window.location.href = "product.html";
    })
})
console.log('init');

