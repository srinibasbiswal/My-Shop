import { actionTypes } from "../data/enums/actionTypes";

export const addAddress = (addressDoc) => {
	return {
		type: actionTypes.ADD_ADDRESS,
		address: addressDoc,
	};
};
