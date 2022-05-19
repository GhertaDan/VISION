let render = document.getElementById("render")

cart.forEach(el => {
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
										<button class="btn btn-remove">Remove</button>
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