import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

import NavBar from "./components/Navbar";
import CartButton from "./components/Cart/CartButton";
import ProductList from "./components/ProductList/ProductList";

import reducer from "./reducers/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

function App() {
	return (
		<Provider store={store}>
			<div>
				<NavBar />
				<ProductList />
				<CartButton />
			</div>
		</Provider>
	);
}

export default App;
