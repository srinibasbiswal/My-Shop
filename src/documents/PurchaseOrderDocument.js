import AddressDocument from "./AddressDocument";

class PurchaseOrderDocument {
	constructor() {
		this.orderNumber = "PO1001";
		this.date = "MM:DD:YYYY";
		this.time = "HH:MM:SS A";
		this.name = "";
		this.phoneNumber = "";
		this.address = new AddressDocument();
		this.numberOfItems = "";
		this.items = [];
		this.totalAmount = "";
		this.itemAmount = "";
		this.deliveryCharges = "";
		this.packagingCharges = "";
		this.otherCharges = "";
		this.comments = "";
		this.userId = "";
	}

	toItemsList() {
		var list = [];
		if (this.items !== undefined && this.items !== []) {
			this.items.forEach((item) => {
				list.push(item.toMap());
			});
			return list;
		} else {
			return list;
		}
	}
}

export default PurchaseOrderDocument;
