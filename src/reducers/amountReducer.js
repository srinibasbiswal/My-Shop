import { actionTypes } from "../data/enums/actionTypes";
import { products } from "../data/prodcuts";
import AmountStateDocument from "../documents/AmountStateDocument";

const initialAmountState = new AmountStateDocument();

const amountReducer = (state = initialAmountState, action) => {
	switch (action.type) {
		case actionTypes.CALCULATE_AMOUNT:
			console.log(action);
			if (action.cart !== undefined) {
				if (action.cart.numberOfItems === 0) {
					const defaultState = new AmountStateDocument();
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
					var newAmountObj = new AmountStateDocument();
					action.cart.itemCodes.map((itemCode, index) => {
						var itemObj = products.filter(function (entry) {
							return entry.id === itemCode;
						})[0];
						newAmountObj.itemsAmount =
							newAmountObj.itemsAmount +
							itemObj.price * action.cart.itemMap[itemCode];
						newAmountObj.totalWeight =
							newAmountObj.totalWeight +
							itemObj.weight * action.cart.itemMap[itemCode];
						newAmountObj.packagingCharges =
							(newAmountObj.totalWeight / 15) * 5;
						newAmountObj.deliveryCharges =
							(newAmountObj.itemsAmount / 100) * 10;
						if (newAmountObj.itemsAmount >= 600) {
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
						itemsAmount: Math.floor(newAmountObj.itemsAmount),
						totalAmount: Math.floor(newAmountObj.totalAmount),
						packagingCharges: Math.floor(
							newAmountObj.packagingCharges
						),
						deliveryCharges: Math.floor(
							newAmountObj.deliveryCharges
						),
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

		case actionTypes.RESET_AMOUNT:
			var newAmountObj = new AmountStateDocument();
			return {
				...state,
				itemsAmount: Math.floor(newAmountObj.itemsAmount),
				totalAmount: Math.floor(newAmountObj.totalAmount),
				packagingCharges: Math.floor(newAmountObj.packagingCharges),
				deliveryCharges: Math.floor(newAmountObj.deliveryCharges),
				totalWeight: newAmountObj.totalWeight,
				overRideDeliveryCharges: newAmountObj.overRideDeliveryCharges,
				overRidePackagingCharges: newAmountObj.overRidePackagingCharges,
				isMinimumPrice: newAmountObj.isMinimumPrice,
			};

		default:
			return state;
	}
};

export default amountReducer;
