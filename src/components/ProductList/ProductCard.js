import "../../styles/ProductCard.css";
import React, { Component } from "react";
import AddButton from "./AddButton";

class ProductCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="imageContainer">
					<img
						className="cardImage"
						src={this.props.product.image}
						alt="product"
					></img>
				</div>
				<div className="cardProp">
					<h1 className="cardTitle">{this.props.product.title}</h1>
					<p className="cardPrice">
						{this.props.product.price.toString() + "$"}
					</p>
				</div>

				<AddButton data={this.props.product} />
			</div>
		);
	}
}
export default ProductCard;
