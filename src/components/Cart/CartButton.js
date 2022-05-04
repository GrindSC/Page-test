import React, { Component } from "react";
import { connect } from "react-redux";

import { clearCart } from "../../actions/cartActions";
import CartCard from "./CartCard";
import "../../styles/Cart.css";

class CartButton extends Component {
	constructor(props) {
		super(props);
		this.cartNumber = 0;
	}
	render() {
		return (
			<div>
				<div
					className="cart"
					href="#collapseExample"
					role="button"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
				>
					<div>
						<div className="itemsAmountContainer">
							<span className="cartItemsAmount">{this.props.itemsNumber}</span>
						</div>
						<svg
							position="absolute"
							margin="auto"
							width="2.5em"
							height="2.5em"
							viewBox="0 0 16 16"
							class="bi bi-basket3"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"
							/>
						</svg>
					</div>
				</div>
				<div className="cartShow">
					<div
						class="collapse"
						id="collapseExample"
						position="absolute"
						top="0"
						right="0"
						margin-top="8px"
						margin-right="30px"
					>
						<div class="cart-card-body">
							<div className="cartContainer">
								{this.props.cart.map((item, index) => {
									item.id = index;
									return <CartCard product={item} key={index}></CartCard>;
								})}
							</div>
							<div className="cartSummary">
								<span className="countPrice">Total Price:</span>
								<span className="countPrice">
									{parseFloat(
										this.props.cart
											.reduce((total, obj) => obj.price + total, 0)
											.toFixed(2)
									).toString() + "$"}
								</span>
								<div
									className="cartButton"
									onClick={() => {
										this.props.clearCart();
									}}
								>
									Clear cart
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		itemsNumber: state.itemsNumber,
		cart: state.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		clearCart: () => dispatch(clearCart()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
