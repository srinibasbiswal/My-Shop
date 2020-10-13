import { actionTypes } from "../data/enums/actionTypes";
import { products } from "../data/prodcuts";

const initialAmountState = {
	itemsAmount: 0,
	totalAmount: 0,
	packagingCharges: 0,
	deliveryCharges: 0,
	totalWeight: 0,
	overRideDeliveryCharges: false,
	overRidePackagingCharges: false,
	isMinimumPrice: false,
};

const amountReducer = (state = initialAmountState, action) => {
	switch (action.type) {
		case actionTypes.CALCULATE_AMOUNT:
			console.log(action);
			if (action.cart.cart !== undefined) {
				if (action.cart.cart.numberOfItems === 0) {
					const defaultState = initialAmountState;
					return {
						...state,
						itemsAmount: defaultState.itemsAmount,
						totalAmount: defaultState.totalAmount,
						packagingCharges: defaultState.packagingCharges,
						deliveryCharges: defaultState.deliveryCharges,
						totalWeight: defaultState.totalWeight,
						overRideDeliveryCharges:
							defaultState.overRideDeliveryCharges,
						overRidePackagingCharges:
							defaultState.overRidePackagingCharges,
						isMinimumPrice: defaultState.isMinimumPrice,
					};
				} else {
					var newAmountObj = initialAmountState;
					action.cart.cart.itemCodes.map((itemCode, index) => {
						var itemObj = products.filter(function (entry) {
							return entry.id === itemCode;
						})[0];
						newAmountObj.itemsAmount =
							newAmountObj.itemsAmount + itemObj.price;
						newAmountObj.totalWeight =
							newAmountObj.totalWeight + itemObj.weight;
						newAmountObj.packagingCharges =
							(newAmountObj.totalWeight / 15) * 5;
						newAmountObj.deliveryCharges =
							(newAmountObj.itemsAmount / 100) * 10;
						if (newAmountObj.itemsAmount > 600) {
							newAmountObj.overRideDeliveryCharges = true;
							newAmountObj.overRidePackagingCharges = true;
						}
						newAmountObj.totalAmount =
							newAmountObj.itemsAmount +
							(newAmountObj.overRideDeliveryCharges
								? 50
								: newAmountObj.deliveryCharges) +
							(newAmountObj.overRidePackagingCharges
								? 0
								: newAmountObj.packagingCharges);
						newAmountObj.isMinimumPrice =
							newAmountObj.totalAmount > 100 ? true : false;
					});

					return {
						...state,
						itemsAmount: newAmountObj.itemsAmount,
						totalAmount: newAmountObj.totalAmount,
						packagingCharges: newAmountObj.packagingCharges,
						deliveryCharges: newAmountObj.deliveryCharges,
						totalWeight: newAmountObj.totalWeight,
						overRideDeliveryCharges:
							newAmountObj.overRideDeliveryCharges,
						overRidePackagingCharges:
							newAmountObj.overRidePackagingCharges,
						isMinimumPrice: newAmountObj.isMinimumPrice,
					};
				}
			}
			return state;

		default:
			return state;
	}
};

export default amountReducer;
