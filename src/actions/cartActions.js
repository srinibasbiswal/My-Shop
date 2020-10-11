import { actionTypes } from "../data/enums/actionTypes";

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
