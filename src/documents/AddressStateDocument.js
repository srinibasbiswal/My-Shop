import AddressDocument from "./AddressDocument";

class AddressStateDocument {
	constructor() {
		this.addressCount = 0;
		this.selectedAddress = new AddressDocument();
		this.addressList = [];
	}
}

export default AddressStateDocument;
