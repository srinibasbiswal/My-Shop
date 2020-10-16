import AddressDocument from "./AddressDocument";
import ItemDocument from "./ItemDocument";

class PurchaseOrderDocument {
	constructor() {
		this.orderNumber = "PO1001";
		this.date = "MM:DD:YYYY";
		this.time = "HH:MM:SS A";
		this.name = "";
		this.phoneNumber = "";
		this.address = new AddressDocument();
		this.numberOfItems = "";
		this.items = [new ItemDocument()];
		this.totalAmount = "";
		this.itemAmount = "";
		this.deliveryCharges = "";
		this.packagingCharges = "";
		this.otherCharges = "";
		this.comments = "";
	}
}

export default PurchaseOrderDocument;
