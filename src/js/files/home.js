if (window.location.href.includes('home.html')) {
    let product = document.querySelectorAll(".card__img");
    product.forEach(el => {
        el.addEventListener("click", e => {
            window.location.href = "product.html";
        })
    })
}