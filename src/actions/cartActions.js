import { actionTypes } from "../data/enums/actionTypes";
import { calculateAmount } from "./amountActions";
import store from "../store";

export const addItem = (itemId, quantity) => {
	return {
		type: actionTypes.ADD_ITEM,
		itemCode: itemId,
		quantity: quantity,
	};
};

export const removeItem = (itemId, quantity) => {
	return {
		type: actionTypes.REMOVE_ITEM,
		itemCode: itemId,
		quantity: quantity,
	};
};

export const resetCart = () => {
	return {
		type: actionTypes.RESET_CART,
	};
};

export const addAndCalculateItem = (itemId, quantity) => {
	return function (dispatch) {
		dispatch(addItem(itemId, quantity));
		dispatch(calculateAmount(store.getState()));
	};
};

export const removeAndCalculateItem = (itemId, quantity) => {
	return function (dispatch) {
		dispatch(removeItem(itemId, quantity));
		dispatch(calculateAmount(store.getState()));
	};
};
