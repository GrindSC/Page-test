import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../../actions/cartActions";

class CartCard extends Component {
  render() {
    return (
      <div className="cartCard">
        <div className="cartImageContainer">
          <img
            className="cartImage"
            src={this.props.product.image}
            alt="product"
          ></img>
        </div>
        <div className="cartProp">
          {/* <a className="cartTitle">{this.props.product.title}</a> */}
          <button className="cartTitle">{this.props.product.title}</button>
          <p className="cartPrice">
            {this.props.product.price.toString() + "$"}
          </p>
        </div>
        <div className="cartRemove">
          <svg
            onClick={() => {
              this.props.removeItem(this.props.product);
            }}
            cursor="pointer"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 16 16"
            class="bi bi-trash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (data) => dispatch(removeItem(data)),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
