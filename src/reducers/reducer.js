import {
	GET_DATA_REQUESTED,
	GET_DATA_DONE,
	GET_DATA_FAILED,
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_CART,
	FILTER_ALPHABET,
	FILTER_BY_PRICE,
	FILTER_BY_DEFAULT,
} from "../actions/actions";
const loading = (
	state = {
		isLoading: false,
		isError: false,
		data: [],
		itemsNumber: 0,
		cart: [],
	},
	action
) => {
	switch (action.type) {
		case GET_DATA_REQUESTED:
			return { ...state, isLoading: true };
		case GET_DATA_DONE:
			return { ...state, isLoading: false, data: action.payload };
		case GET_DATA_FAILED:
			return { ...state, isLoading: false, isError: true };
		case ADD_ITEM:
			return {
				...state,
				itemsNumber: state.itemsNumber + 1,
				cart: state.cart.concat(action.payload),
			};
		case REMOVE_ITEM:
			return {
				...state,
				itemsNumber: state.itemsNumber - 1,
				cart: state.cart.filter((item) => item !== action.payload),
			};
		case CLEAR_CART:
			return {
				...state,
				itemsNumber: 0,
				cart: [],
			};
		case FILTER_ALPHABET:
			return {
				...state,
				data: action.payload,
			};
		case FILTER_BY_PRICE:
			return {
				...state,
				data: action.payload,
			};
		case FILTER_BY_DEFAULT:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};
export default loading;
