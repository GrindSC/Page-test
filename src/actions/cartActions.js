import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "./actions";
export const addItem = (data) => {
	return {
		type: ADD_ITEM,
		payload: data,
	};
};

export const removeItem = (data) => {
	return {
		type: REMOVE_ITEM,
		payload: data,
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART,
	};
};
