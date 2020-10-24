import { actionTypes } from "../data/enums/actionTypes";
import { calculateAmount, resetAmount } from "./amountActions";
import { setCartDB } from "../firebase/cartHandler";
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

export const deleteItemFromCart = (itemId) => {
	if (
		store.getState().cart !== undefined &&
		store.getState().cart.itemMap !== undefined &&
		store.getState().cart.itemMap[itemId] !== undefined
	) {
		const quantity = store.getState().cart.itemMap[itemId];
		return function (dispatch) {
			dispatch(removeItem(itemId, quantity));
			setCartDB(
				store.getState().authentication.userId,
				store.getState().cart
			);
			dispatch(calculateAmount(store.getState()));
		};
	} else {
		return store.getState();
	}
};

export const addAndCalculateItem = (itemId, quantity) => {
	return function (dispatch) {
		dispatch(addItem(itemId, quantity));
		setCartDB(
			store.getState().authentication.userId,
			store.getState().cart
		);
		dispatch(calculateAmount(store.getState()));
	};
};

export const removeAndCalculateItem = (itemId, quantity) => {
	return function (dispatch) {
		dispatch(removeItem(itemId, quantity));
		setCartDB(
			store.getState().authentication.userId,
			store.getState().cart
		);
		dispatch(calculateAmount(store.getState()));
	};
};

export const resetCartAndCalculate = () => {
	return function (dispatch) {
		dispatch(resetCart());
		setCartDB(
			store.getState().authentication.userId,
			store.getState().cart
		);
		dispatch(resetAmount());
	};
};
