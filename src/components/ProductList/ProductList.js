import React from "react";
import { connect } from "react-redux";

import "../../styles/Components.css";

import { getData } from "../../actions/loadingActions";
import ProductCard from "./ProductCard";

class ProductList extends React.Component {
	componentDidMount() {
		const { getData } = this.props;
		getData();
	}
	render() {
		const { isLoading, isError, data } = this.props;
		if (isLoading === false && isError === false)
			return (
				<div className="productContainer">
					{data.map((item, index) => {
						return <ProductCard product={item} key={index}></ProductCard>;
					})}
				</div>
			);
		else if (isLoading === true && isError === false)
			return (
				<div class="d-flex justify-content-center" id="spinnerBox">
					<div class="spinner-border" role="status" id="spinner"></div>
				</div>
			);
		else if (isLoading === false && isError === true)
			return <span id="error">Oops! Something went wrong..</span>;
		else if (isLoading === true && isError === true) return <div></div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		isError: state.isError,
		data: state.data,
		itemsNumber: state.itemsNumber,
		cart: state.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => dispatch(getData()),
	};
};

ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductList;
