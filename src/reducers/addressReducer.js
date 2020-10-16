import { actionTypes } from "../data/enums/actionTypes";
import AddressDocument from "../documents/AddressDocument";

const initialAddressState = new AddressDocument();

const addressReducer = (state = initialAddressState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ADDRESS:
			if (action.address !== undefined) {
				return {
					...state,
					name:
						action.address.name !== undefined
							? action.address.name
							: "",
					addr1:
						action.address.addr1 !== undefined
							? action.address.addr1
							: "",
					addr2:
						action.address.addr2 !== undefined
							? action.address.addr2
							: "",
					landmark:
						action.address.landmark !== undefined
							? action.address.landmark
							: "",
					pin:
						action.address.pin !== undefined
							? action.address.pin
							: "",
					phoneNumber:
						action.address.phoneNumber !== undefined
							? action.address.phoneNumber
							: "",
				};
			}

			break;

		default:
			return state;
	}
};

export default addressReducer;
