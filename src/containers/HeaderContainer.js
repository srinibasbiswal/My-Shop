import React from "react";
import Header from "../components/Header";
import firebase from "../firebaseConfig";

function HeaderContainer() {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			alert("logged IN");
		} else {
			alert("logged out");
		}
	});

	return <Header />;
}

export default HeaderContainer;
