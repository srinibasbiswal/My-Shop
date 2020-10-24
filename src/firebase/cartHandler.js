import firebase from "../firebaseConfig";

const db = firebase.firestore();

export const setCartDB = (id, cartDoc) => {
	db.collection("users")
		.doc(id)
		.collection("userCart")
		.doc(id + "_userCart")
		.set({
			numberOfItems: cartDoc.numberOfItems,
			itemCodes: cartDoc.itemCodes,
			itemMap: cartDoc.itemMap,
		})
		.then(function () {
			console.log("Document successfully written!");
		})
		.catch(function (error) {
			console.error("Error writing document: ", error);
		});
};
