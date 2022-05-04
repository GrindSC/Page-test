import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/Components.css";
import "../styles/ProductCard.css";

import {
  filterByAlphabet,
  filterByPrice,
  filterByDefault,
} from "../actions/filterActions";

const sortByAlphabet = (data) => {
  let newData = data.concat();
  newData.sort(function (a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return newData;
};

const sortByPrice = (data) => {
  let newData = data.concat();
  newData.sort(function (a, b) {
    return a.price - b.price;
  });
  return newData;
};

const sortByDefault = (data) => {
  let newData = data.concat();
  newData.sort(function (a, b) {
    return a.id - b.id;
  });
  return newData;
};

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navSpace"></div>
        <div class="navbar-brand" cursor="default">
          Online Shop
        </div>
        <button
          class="navbar-toggler"
          cursor="default"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="https://github.com/GrindSC">
                Github <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div class="dropdown">
            <button
              class="searchBar"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Sort by</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              id="dropdown"
            >
              <div
                class="dropdown-item"
                onClick={() => {
                  this.props.filterByAlphabet(sortByAlphabet(this.props.data));
                }}
              >
                Alphabetic order
              </div>
              <div
                class="dropdown-item"
                onClick={() => {
                  this.props.filterByPrice(sortByPrice(this.props.data));
                }}
              >
                Price
              </div>
              <div
                class="dropdown-item"
                onClick={() => {
                  this.props.filterByDefault(sortByDefault(this.props.data));
                }}
              >
                By default
              </div>
            </div>
          </div>
          <div className="cartPlace"></div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByAlphabet: (data) => dispatch(filterByAlphabet(data)),
    filterByPrice: (data) => dispatch(filterByPrice(data)),
    filterByDefault: (data) => dispatch(filterByDefault(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
