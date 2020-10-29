import firebase from "../firebaseConfig";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import AddressDocument from "../documents/AddressDocument";
import { setAddressStateFromList } from "../actions/addressActions";
const db = firebase.firestore();

export const createNewAddress = (authState, addressDoc) => {
	if (
		authState !== undefined &&
		authState.isLoggedIn !== undefined &&
		authState.isLoggedIn &&
		authState.userId !== undefined &&
		authState.userId !== ""
	) {
		var dateNow = new Date(Date.now()).toLocaleString();
		const uniqueKeys =
			dateNow.split(",")[0] + dateNow.split(",")[1] + authState.userId;
		const uniqueId = Base64.stringify(sha256(uniqueKeys))
			.replaceAll("+", "pLUs")
			.replaceAll("/", "s1aSh")
			.replaceAll("=", "xMl3Jk");
		db.collection("users")
			.doc(authState.userId)
			.collection("address")
			.doc(uniqueId)
			.set({
				name: addressDoc.name,
				phoneNumber: addressDoc.phoneNumber,
				addr1: addressDoc.addr1,
				addr2: addressDoc.addr2,
				landmark: addressDoc.landmark,
				city: addressDoc.city,
				state: addressDoc.state,
				country: addressDoc.country,
				pin: addressDoc.pin,
			})
			.then(function () {
				console.log("Document successfully written!");
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	} else {
		console.log("Address Handler : Not Logged In");
	}
};

export const getAddresses = (dispatch, userId) => {
	var addressList = [];
	db.collection("users")
		.doc(userId)
		.collection("address")
		.get()
		.then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.id, " => ", doc.data());
				var addressDoc = new AddressDocument();
				addressDoc.id = doc.id;
				addressDoc.name = doc.data().name;
				addressDoc.phoneNumber = doc.data().phoneNumber;
				addressDoc.addr1 = doc.data().addr1;
				addressDoc.addr2 = doc.data().addr2;
				addressDoc.landmark = doc.data().landmark;
				addressDoc.city = doc.data().city;
				addressDoc.state = doc.data().state;
				addressDoc.country = doc.data().country;
				addressDoc.pin = doc.data().pin;
				addressList.push(addressDoc);
			});
			dispatch(setAddressStateFromList(addressList));
		})
		.catch(function (error) {
			console.log("Error getting documents: ", error);
		});
};
