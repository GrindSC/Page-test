import { GET_DATA_REQUESTED, GET_DATA_DONE, GET_DATA_FAILED } from "./actions";
export const getDataRequested = () => {
	return {
		type: GET_DATA_REQUESTED,
	};
};

export const getDataDone = (data) => {
	return {
		type: GET_DATA_DONE,
		payload: data,
	};
};

export const getDataFailed = (error) => {
	return {
		type: GET_DATA_FAILED,
		payload: error,
	};
};

export function getData() {
	return (dispatch) => {
		dispatch(getDataRequested());
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {
				dispatch(getDataDone(data));
			})
			.catch((error) => {
				dispatch(getDataFailed(error));
			});
	};
}
