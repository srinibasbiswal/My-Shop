import React from "react";
import Header from "../components/Header";
import firebase from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { setAuthStateFromUser } from "../actions/authActions";

function HeaderContainer() {
	const dispatch = useDispatch();
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log(user);
			dispatch(setAuthStateFromUser(user));
		}
	});

	return <Header />;
}

export default HeaderContainer;
