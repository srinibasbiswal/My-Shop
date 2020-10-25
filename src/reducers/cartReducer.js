import { actionTypes } from "../data/enums/actionTypes";
import CartStateDocument from "../documents/CartStateDocument";

const initialCartState = new CartStateDocument();

const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ITEM:
			if (state.numberOfItems !== 0) {
				// If cart is not empty
				var itemQtyMap = state.itemMap;
				if (state.itemCodes.indexOf(action.itemCode) !== -1) {
					// If item is present in the cart
					itemQtyMap[action.itemCode] =
						state.itemMap[action.itemCode] + action.quantity;
					return {
						...state,
						numberOfItems: state.numberOfItems + action.quantity,
						itemMap: itemQtyMap,
					};
				} else {
					// If Item is not present in the cart
					itemQtyMap[action.itemCode] = action.quantity;
					var itemCodesList = state.itemCodes;
					itemCodesList.push(action.itemCode);
					return {
						...state,
						numberOfItems: state.numberOfItems + action.quantity,
						itemCodes: itemCodesList,
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
				return {
					...state,
					numberOfItems: state.numberOfItems + action.quantity,
					itemCodes: itemCodesList,
					itemMap: itemQtyMap,
				};
			}

		case actionTypes.REMOVE_ITEM:
			if (state.numberOfItems !== 0) {
				// If cart is not empty
				if (state.itemCodes.indexOf(action.itemCode) !== -1) {
					// If item is present in the cart
					var itemQtyMap = state.itemMap;
					var itemCodesList = state.itemCodes;
					itemQtyMap[action.itemCode] =
						itemQtyMap[action.itemCode] - action.quantity;
					if (itemQtyMap[action.itemCode] <= 0) {
						const index = itemCodesList.indexOf(action.itemCode);
						if (index > -1) {
							itemCodesList.splice(index, 1);
						}
						delete itemQtyMap[action.itemCode];
					}
					return {
						...state,
						numberOfItems: state.numberOfItems - action.quantity,
						itemCodes: itemCodesList,
						itemMap: itemQtyMap,
					};
				} else {
					// If Item is not present in the cart
					return state;
				}
			} else {
				return state;
			}
		case actionTypes.RESET_CART:
			const defaultState = new CartStateDocument();
			return {
				...state,
				numberOfItems: defaultState.numberOfItems,
				itemCodes: defaultState.itemCodes,
				itemMap: defaultState.itemMap,
			};

		case actionTypes.SET_CART:
			const cartDoc = action.cart;
			return {
				...state,
				numberOfItems: cartDoc.numberOfItems,
				itemCodes: cartDoc.itemCodes,
				itemMap: cartDoc.itemMap,
			};

		default:
			return state;
	}
};

export default cartReducer;
