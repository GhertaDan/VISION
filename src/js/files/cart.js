if (window.location.href.includes('cart.html')) {

	function removeItem(idx) {
		console.log(idx);
	}

	let render = document.getElementById("render");


	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart.forEach((el, idx) => {
		let item = `<div class="cart__wrapper">
							<div class="cart__item">
								<div class="cart__item-container">
									<div class="cart__item-img">
										<img src="${el.img}" alt="">
									</div>
									<div class="cart__item-box">
										<div class="cart__item-name">
											<h3>${el.name}</h3>
										</div>
										<div class="cart__item-price">
											<p>${el.price}</p>
										</div>
										<div class="cart__item-remove">
											<button class="btn btn-remove" onclick="removeItem(1)">Remove</button>
										</div>
									</div>
								</div>
							</div>
							<div class="cart__qnt">
								<button>-</button>
								<div class="cart__qnt-number">
									${el.count}
								</div>
								<button>+</button>
							</div>
							<div class="cart__subtotal">
								$65.9
							</div>
						</div>
	
						`;
		render.innerHTML += item;
	})

	let cartItems = document.querySelectorAll(".cart__wrapper");
	// console.log(cartItems);
	cartItems.forEach(el => {

		el.childNodes[1].childNodes[1].childNodes[3].childNodes[5].children[0].addEventListener("click", e => {
			console.log(e);
			el.style.display = 'none';
		})
	})
}