import { actionTypes } from "../data/enums/actionTypes";

export const calculateAmount = (cartState) => {
	return {
		type: actionTypes.CALCULATE_AMOUNT,
		cart: cartState.cart,
	};
};

export const resetAmount = () => {
	return {
		type: actionTypes.RESET_AMOUNT,
	};
};
