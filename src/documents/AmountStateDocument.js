class AmountStateDocument {
	constructor() {
		this.itemsAmount = 0;
		this.totalAmount = 0;
		this.packagingCharges = 0;
		this.deliveryCharges = 0;
		this.totalWeight = 0;
		this.overRideDeliveryCharges = false;
		this.overRidePackagingCharges = false;
		this.isMinimumPrice = false;
	}
}

export default AmountStateDocument;
