if (window.location.href.includes('cart.html')) {

	let applyCode = document.getElementById("applyCode");
	let cartDiscount = document.querySelectorAll(".cartDiscount");
	let cartTotalInput = document.querySelector(".cart__total-input").value;
	let promoCode = 'BR3886T';
	let discount = null;

	let render = document.getElementById("render");

	let cartSubtotal = document.getElementById("cartSubtotal");
	let cartTotal = document.getElementById("cartTotal");

	function renderCart() {
		render.innerHTML = '';
		let cart = JSON.parse(localStorage.getItem('cart')) || [];
		cart.forEach((el) => {
			let item = `<div class="cart__wrapper">
							<div class="cart__item">
								<div class="cart__item-container">
									<div class="cart__item-img">
										<img src="${el.img}" alt="">
									</div>
									<div class="cart__item-box">
										<div class="cart__item-description">
											<div class="cart__item-name">
												<h3>${el.name}</h3>
											</div>
											<div class="cart__item-price">
												<p>$${el.price}</p>
											</div>
											<div class="cart__item-remove">
												<button class="btn btn-remove" onclick="">Remove</button>
											</div>
										</div>
										<div class="cart__qnt">
											<div class="cart__qnt-number">
												 ${el.count}
											</div>
										</div>
										<div class="cart__subtotal">
											$${el.subtotal}
										</div>
									</div>
								</div>
							</div>

						</div>

						`;
			render.innerHTML += item;
		});
		let count = 0;
		cartSubtotal.innerHTML = cart.reduce((total, el) => {
			count += Number(el.subtotal);
			return `$${count.toFixed(2)}`;
		}, 0);
		let totalCount = 0;

		cartTotal.innerHTML = cart.reduce((total, el) => {
			totalCount += Number(el.subtotal);

			return `$${(6 - discount + totalCount).toFixed(2)}`

			// return `$${(6 + totalCount).toFixed(2)}`;
		}, 0)

		cartDiscount.forEach(el => {
			el.style.display = "none"
			applyCode.addEventListener("click", e => {
				if ((cartTotalInput) == promoCode) {
					discount = 10;
					e.target.style.display = "block";
					el.classList.add('block');
				} else el.style.display = "none";
				e.preventDefault();
				renderCart();
			})
		});
	}

	renderCart();

	// cartDiscount.forEach(el => {
	// 	el.style.display = "none"
	// 	applyCode.addEventListener("click", e => {
	// 		if ((cartTotalInput) == promoCode) {
	// 			discount = 10;
	// 			el.style.display = "block";
	// 		} else el.style.display = "none";
	// 		e.preventDefault();
	// 		cartDiscount();
	// 	})
	// });
	let cartItems = document.querySelectorAll(".cart__wrapper");
	cartItems.forEach((el, idx) => {
		// console.log(el.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[5].childNodes[1]);

		// console.log(el.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[5].childNodes[1]);
		el.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[5].childNodes[1].addEventListener("click", e => {
			let cart = JSON.parse(localStorage.getItem('cart')) || [];
			cart.splice(idx, 1);
			console.log(cart);
			localStorage.setItem('cart', JSON.stringify(cart))
			cartItems = document.querySelectorAll(".cart__wrapper");
			render.innerHTML = '';
			renderCart();
			location.reload();
		})
	})

	const cart = document.getElementById("cart");
	const pageContainer = document.getElementById("pageContainer");
	const sideMenu = document.getElementById("sideMenu");
	const cartTotalCheckout = document.querySelector(".cart__total-checkout");

	cartTotalCheckout.addEventListener('click', () => {
		// cart.classList.add("page-active")
		// pageContainer.classList.add("extended")
		sideMenu.classList.add("side-menu_active")
		document.body.classList.add("checkout-open")
		document.querySelector(".overlay").classList.add("block")
	})

	const cartOrderBtn = document.querySelector(".side-menu__btn");

	cartOrderBtn.addEventListener("click", () => {
		Swal.fire({
			title: 'ORDER COMPLETE!',
			icon: 'success',
			confirmButtonText: 'SHOW MORE!'
		})
	})

	let closeBtn = document.getElementById("closeButton");
	closeBtn.addEventListener("click", () => {
		sideMenu.classList.remove("side-menu_active")
		document.body.classList.remove("checkout-open")
		document.querySelector(".overlay").classList.remove("block")
	})

	let arr = [1, 2, 3, "abc"];
	console.log(JSON.stringify(arr));

}
import Swal from 'sweetalert2';