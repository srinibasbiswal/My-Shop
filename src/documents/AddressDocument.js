class AddressDocument {
	constructor() {
		this.id = "";
		this.name = "";
		this.phoneNumber = "";
		this.addr1 = "";
		this.addr2 = "";
		this.landmark = "";
		this.city = "Bhubaneswar";
		this.state = "Odisha";
		this.country = "India";
		this.pin = "";
	}

	toMap() {
		var map = {};
		map["name"] = this.name;
		map["phoneNumber"] = this.phoneNumber;
		map["addr1"] = this.addr1;
		map["addr2"] = this.addr2;
		map["landmark"] = this.landmark;
		map["city"] = this.city;
		map["state"] = this.state;
		map["country"] = this.country;
		map["pin"] = this.pin;
		return map;
	}

	toString() {
		var addressString = "";
		addressString =
			this.name +
			" , " +
			this.phoneNumber +
			" , " +
			this.addr1 +
			" , " +
			this.addr2 +
			" , " +
			this.landmark +
			" , " +
			this.city +
			" , " +
			this.state +
			" , " +
			this.country +
			" , " +
			this.pin;
		return addressString;
	}
}

export default AddressDocument;
