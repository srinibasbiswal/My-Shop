class ItemDocument {
	constructor() {
		this.itemName = "";
		this.quantity = "";
		this.amount = "";
		this.itemCode = "";
	}
	toMap() {
		var map = {};
		map["itemName"] = this.itemName;
		map["quantity"] = this.quantity;
		map["amount"] = this.amount;
		map["itemCode"] = this.itemCode;
		return map;
	}
}

export default ItemDocument;
