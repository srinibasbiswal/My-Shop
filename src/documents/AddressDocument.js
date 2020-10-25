class AddressDocument {
	constructor() {
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
		map["stapinte"] = this.pin;
		return map;
	}
}

export default AddressDocument;
