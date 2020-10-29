import { actionTypes } from "../data/enums/actionTypes";
import { createNewAddress, getAddresses } from "../firebase/addressHandler";
import store from "../store";

export const setAddress = (addressDoc) => {
	return {
		type: actionTypes.SET_ADDRESS,
		address: addressDoc,
	};
};

export const setAddressState = (addresses) => {
	return {
		type: actionTypes.SET_MULTIPLE_ADDRESSES,
		addressList: addresses,
	};
};

export const addAddress = (addressDoc) => {
	return function (dispatch) {
		createNewAddress(store.getState().authentication, addressDoc);
		getAddresses(dispatch, store.getState().authentication.userId);
	};
};
