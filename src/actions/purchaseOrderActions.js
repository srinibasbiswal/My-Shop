import { actionTypes } from "../data/enums/actionTypes";
import store from "../store";

export const createPurchaseOrder = () => {
	if (
		store.getState().cart !== undefined &&
		store.getState().amount !== undefined &&
		store.getState().address !== undefined
	) {
		return {
			type: actionTypes.CREATE_PO,
			cart: store.getState().cart,
			amount: store.getState().amount,
			address: store.getState().address,
		};
	} else {
		return store.getState();
	}
};
