if (window.location.href.includes('product.html')) {

    let prodImg = document.getElementById("prod-img");

    function changeImg(img) {
        prodImg.src = img.src;
    }

    let imgSmall = document.querySelectorAll(".product__img-abs");
    imgSmall.forEach(el => {
        el.addEventListener("click", e => {
            if (e.target.classList[0]) {
                changeImg(e.target.children[0])

            } else changeImg(e.target);
        })
    })

    let add = document.getElementById("add");
    let remove = document.getElementById("remove");
    let input = document.querySelector(".product__qnt-number");

    add.addEventListener("click", el => {
        input.textContent = Number(input.textContent) + 1;
    });

    remove.addEventListener("click", el => {
        if (input.textContent > 1) {
            input.textContent = Number(input.textContent) - 1;
        }
    })


    let addCart = document.getElementById("addCart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(addCart);

    addCart.addEventListener("click", (e, idx) => {
        const cartItem = {
            name: document.getElementById("prodName").textContent,
            price: document.getElementById("prodPrice").textContent.replace("$", "").trim(),
            img: document.getElementById("prod-img").src,
            count: document.querySelector(".product__qnt-number").textContent,
            subtotal: "",
            id: idx
        }
        cartItem.subtotal = (cartItem.price * cartItem.count).toFixed(2)
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
    })
};