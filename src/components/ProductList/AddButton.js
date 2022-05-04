import "../../styles/ProductCard.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/cartActions";

const merge = (id, data) => {
	let newData = Object.assign({}, data);
	newData.id = id;
	return newData;
};

class AddButton extends Component {
	constructor(props) {
		super(props);
		this.itemsNumber = 1;
	}
	render() {
		return (
			<div
				className="cardButton"
				onClick={() => {
					this.itemsNumber += 1;
					this.props.addItem(merge(this.itemsNumber, this.props.data));
				}}
			>
				Add to Cart
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		itemsNumber: state.itemsNumber,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (data) => dispatch(addItem(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
