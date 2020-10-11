import { actionTypes } from "../data/enums/actionTypes";

const initialCartState = {
	numberOfItems: 0,
	itemCodes: [],
	itemMap: {},
};

const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ITEM:
			if (state.numberOfItems !== 0) {
				// If cart is not empty
				var itemQtyMap = state.itemMap;
				if (state.itemCodes.indexOf(action.itemCode) !== -1) {
					// If item is not present in the cart
					itemQtyMap[action.itemCode] =
						state.itemMap[action.itemCode] + 1;
					return {
						...state,
						numberOfItems: state.numberOfItems + action.quantity,
						itemMap: itemQtyMap,
					};
				} else {
					// If Item is present in the cart
					itemQtyMap[action.itemCode] = action.quantity;
					return {
						...state,
						numberOfItems: state.numberOfItems + action.quantity,
						itemCodes: state.itemCodes.push(action.itemCode),
						itemMap: itemQtyMap,
					};
				}
			}
			// If Cart is empty
			else {
				var itemQtyMap = {};
				var itemCodesList = [];
				itemCodesList.push(action.itemCode);
				itemQtyMap[action.itemCode] = action.quantity;
				console.log(itemCodesList);
				console.log(action.itemCode);
				return {
					...state,
					numberOfItems: state.numberOfItems + action.quantity,
					itemCodes: itemCodesList,
					itemMap: itemQtyMap,
				};
			}

		case actionTypes.REMOVE_ITEM:
			return state;
		case actionTypes.EMPTY_CART:
			return state;
		default:
			return state;
	}
};

export default cartReducer;
