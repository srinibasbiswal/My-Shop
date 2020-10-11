import { actionTypes } from "../data/enums/actionTypes";

export const resetCart = () => {
	return {
		type: actionTypes.RESET_CART,
	};
};
