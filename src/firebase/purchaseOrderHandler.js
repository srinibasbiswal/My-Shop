import firebase from "../firebaseConfig";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import PurchaseOrderDocument from "../documents/PurchaseOrderDocument";
const db = firebase.firestore();

export const createPO = (purchaseOrder) => {
	console.log(purchaseOrder);
	const uniqueKeys =
		purchaseOrder.date +
		purchaseOrder.time +
		purchaseOrder.name +
		purchaseOrder.userId;
	const uniqueId = Base64.stringify(sha256(uniqueKeys))
		.replaceAll("+", "pLUs")
		.replaceAll("/", "s1aSh")
		.replaceAll("=", "xMl3Jk");
	console.log(uniqueId);
	var tempPODoc = new PurchaseOrderDocument();
	tempPODoc.items = purchaseOrder.items;
	db.collection("purchaseOrders")
		.doc(uniqueId)
		.set({
			orderNumber: purchaseOrder.orderNumber,
			date: purchaseOrder.date,
			time: purchaseOrder.time,
			name: purchaseOrder.name,
			phoneNumber: purchaseOrder.phoneNumber,
			address: purchaseOrder.address.toMap(),
			numberOfItems: purchaseOrder.numberOfItems,
			items: tempPODoc.toItemsList(),
			totalAmount: purchaseOrder.totalAmount,
			itemAmount: purchaseOrder.itemAmount,
			deliveryCharges: purchaseOrder.deliveryCharges,
			packagingCharges: purchaseOrder.packagingCharges,
			otherCharges: purchaseOrder.otherCharges,
			comments: purchaseOrder.comments,
			userId: purchaseOrder.userId,
		})
		.then(function () {
			console.log("Document successfully written!");
		})
		.catch(function (error) {
			console.error("Error writing document: ", error);
		});
};
