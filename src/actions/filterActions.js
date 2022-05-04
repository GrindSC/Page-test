import { FILTER_ALPHABET, FILTER_BY_PRICE, FILTER_BY_DEFAULT } from "./actions";
export const filterByAlphabet = (data) => {
	return {
		type: FILTER_ALPHABET,
		payload: data,
	};
};

export const filterByPrice = (data) => {
	return {
		type: FILTER_BY_PRICE,
		payload: data,
	};
};

export const filterByDefault = (data) => {
	return {
		type: FILTER_BY_DEFAULT,
		payload: data,
	};
};
