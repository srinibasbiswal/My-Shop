import { actionTypes } from "../data/enums/actionTypes";

const initialAmountState = {
	itemsAmount: 0,
	totalAmount: 0,
	packagingCharges: 0,
	deliveryCharges: 0,
	totalWeight: 0,
	overRideDeliveryCharges: false,
	overRidePackagingCharges: false,
};

const amountReducer = (state = initialAmountState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ITEM:
			return state;

		default:
			return state;
	}
};

export default amountReducer;
