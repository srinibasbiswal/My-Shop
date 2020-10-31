import { actionTypes } from "../data/enums/actionTypes";
import AddressStateDocument from "../documents/AddressStateDocument";
import { createNewAddress, getAddresses } from "../firebase/addressHandler";
import store from "../store";

export const setAddress = (addressDoc) => {
	return {
		type: actionTypes.SET_ADDRESS,
		address: addressDoc,
	};
};

export const setAddressStateFromList = (addresses) => {
	return {
		type: actionTypes.SET_MULTIPLE_ADDRESSES,
		addressList: addresses,
	};
};

export const setAddressState = (addressStateDoc) => {
	return {
		type: actionTypes.SET_ADDRESS_STATE,
		addressState: addressStateDoc,
	};
};

export const resetAddressState = () => {
	return function (dispatch) {
		var addressStateDoc = new AddressStateDocument();
		dispatch(setAddressState(addressStateDoc));
	};
};

export const addAddress = (addressDoc) => {
	return function (dispatch) {
		createNewAddress(store.getState().authentication, addressDoc);
		getAddresses(dispatch, store.getState().authentication.userId);
	};
};
