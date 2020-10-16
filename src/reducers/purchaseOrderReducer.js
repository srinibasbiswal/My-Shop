import { actionTypes } from "../data/enums/actionTypes";
import AddressDocument from "../documents/AddressDocument";
import ItemDocument from "../documents/ItemDocument";
import PurchaseOrderDocument from "../documents/PurchaseOrderDocument";
import { products } from "../data/prodcuts";

const initialPOState = new PurchaseOrderDocument();

const purchaseOrderReducer = (state = initialPOState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_PO:
			if (
				action.cart !== undefined &&
				action.amount !== undefined &&
				action.address !== undefined
			) {
				var itemList = [];
				var addressDoc = new AddressDocument();
				action.cart.itemCodes.map((itemCode, index) => {
					var itemObj = products.filter(function (entry) {
						return entry.id === itemCode;
					})[0];
					var itemDoc = new ItemDocument();
					itemDoc.itemCode = itemObj.id;
					itemDoc.itemName = itemObj.name;
					itemDoc.quantity = action.cart.itemMap[itemObj.id];
					itemDoc.amount = itemObj.price;
					itemList.push(itemDoc);
				});
				addressDoc.name = action.address.name;
				addressDoc.phoneNumber = action.address.phoneNumber;
				addressDoc.addr1 = action.address.addr1;
				addressDoc.addr2 = action.address.addr2;
				addressDoc.landmark = action.address.landmark;
				addressDoc.pin = action.address.pin;
				var dateNow = new Date(Date.now()).toLocaleString();
				return {
					...state,
					date: dateNow.split(",")[0],
					time: dateNow.split(",")[1],
					name: addressDoc.name,
					phoneNumber: addressDoc.phoneNumber,
					address: addressDoc,
					numberOfItems: action.cart.numberOfItems,
					items: itemList,
					totalAmount: action.amount.totalAmount,
					itemAmount: action.amount.itemsAmount,
					deliveryCharges: action.amount.overRideDeliveryCharges
						? 50
						: action.amount.deliveryCharges,
					packagingCharges: action.amount.overRidePackagingCharges
						? 0
						: action.amount.packagingCharges,
					otherCharges: "",
					comments: "",
				};
			} else {
				return state;
			}

		default:
			return state;
	}
};

export default purchaseOrderReducer;
