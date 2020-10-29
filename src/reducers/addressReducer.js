import { actionTypes } from "../data/enums/actionTypes";
import AddressDocument from "../documents/AddressDocument";
import AddressStateDocument from "../documents/AddressStateDocument";

const initialAddressState = new AddressStateDocument();

const addressReducer = (state = initialAddressState, action) => {
	switch (action.type) {
		case actionTypes.SET_ADDRESS:
			if (action.address !== undefined) {
				var addressDoc = new AddressDocument();
				addressDoc.name =
					action.address.name !== undefined
						? action.address.name
						: "";
				addressDoc.addr1 =
					action.address.addr1 !== undefined
						? action.address.addr1
						: "";
				addressDoc.addr2 =
					action.address.addr2 !== undefined
						? action.address.addr2
						: "";
				addressDoc.landmark =
					action.address.landmark !== undefined
						? action.address.landmark
						: "";
				addressDoc.pin =
					action.address.pin !== undefined ? action.address.pin : "";
				addressDoc.phoneNumber =
					action.address.phoneNumber !== undefined
						? action.address.phoneNumber
						: "";
				return {
					...state,
					selectedAddress: addressDoc,
				};
			}

		case actionTypes.SET_MULTIPLE_ADDRESSES:
			if (action.addressList !== undefined) {
				var addressStateDoc = new AddressStateDocument();
				if (
					action.addressList !== undefined &&
					action.addressList.length > 0
				) {
					addressStateDoc.addressCount = action.addressList.length;
					var addressDocList = [];
					action.addressList.forEach((doc) => {
						var addressDoc = new AddressDocument();
						addressDoc.id = doc.id;
						addressDoc.name = doc.name;
						addressDoc.phoneNumber = doc.phoneNumber;
						addressDoc.addr1 = doc.addr1;
						addressDoc.addr2 = doc.addr2;
						addressDoc.landmark = doc.landmark;
						addressDoc.city = doc.city;
						addressDoc.state = doc.state;
						addressDoc.country = doc.country;
						addressDoc.pin = doc.pin;
						addressDocList.push(addressDoc);
					});
					addressStateDoc.addressList = addressDocList;
					return {
						...state,
						addressCount: addressStateDoc.addressCount,
						addressList: addressStateDoc.addressList,
						selectedAddress:
							addressStateDoc.addressList[
								addressStateDoc.addressCount - 1
							],
					};
				}
			}

		default:
			return state;
	}
};

export default addressReducer;
