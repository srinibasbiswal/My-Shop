import { actionTypes } from "../data/enums/actionTypes";

export const addItem = (itemId, quantity) => {
	return {
		type: actionTypes.ADD_ITEM,
		itemCode: itemId,
		quantity: quantity,
	};
};
