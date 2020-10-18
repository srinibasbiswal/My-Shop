import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const devConfig = {
	apiKey: "AIzaSyCiVBU_ZIbDBbCfByzsL_O0HwotAs0yclM",
	authDomain: "my-shop-theme.firebaseapp.com",
	databaseURL: "https://my-shop-theme.firebaseio.com",
	projectId: "my-shop-theme",
	storageBucket: "my-shop-theme.appspot.com",
	messagingSenderId: "406685804990",
	appId: "1:406685804990:web:2ec8eb7b7e2d156932f1ef",
	measurementId: "G-MFCSEEHHT4",
};

if (!firebase.apps.length) {
	firebase.initializeApp(devConfig);
}

export default firebase;
