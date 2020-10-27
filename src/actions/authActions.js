import { authResponses } from "../data/enums/authResponses";
import { authTypes } from "../data/enums/authTypes";
import store from "../store";
import {
	createUserUsingEmail,
	logInUsingEmail,
	createUserUsingPhone,
	onSubmitOtp,
	logOutDispatcher,
} from "../firebase/authHandler";
import { resetAmount } from "./amountActions";
import { resetCart } from "./cartActions";
import AuthStateDocument from "../documents/AuthStateDocument";

export const logIn = (authType, email, password, rememberMe) => {
	console.log(authType, email, password, rememberMe);
	return (dispatch) => {
		switch (authType) {
			case authTypes.EMAIL:
				logInUsingEmail(
					dispatch,
					store.getState().cart,
					email,
					password,
					rememberMe
				);
				break;

			default:
				break;
		}
	};
};

export const signUp = (authType, email, password, phoneNumber, otp) => {
	return (dispatch) => {
		switch (authType) {
			case authTypes.EMAIL:
				createUserUsingEmail(
					dispatch,
					store.getState().cart,
					email,
					password
				);
				break;

			case authTypes.PHONE:
				if (otp === undefined || otp === "") {
					createUserUsingPhone(dispatch, phoneNumber);
				} else {
					onSubmitOtp(dispatch, store.getState().cart, otp);
				}
				break;

			default:
				break;
		}
	};
};

export const logOut = () => {
	return (dispatch) => {
		logOutDispatcher(dispatch);
		dispatch(resetCart());
		dispatch(resetAmount());
	};
};

export const setAuthState = (authState) => {
	return {
		type: authResponses.SET_AUTH_STATE,
		authState: authState,
	};
};

export const setAuthStateFromUser = (user) => {
	console.log(user);
	var authStateDoc = new AuthStateDocument();
	if (user) {
		if (user.uid !== undefined && user.uid !== "") {
			authStateDoc.userId = user.uid;
			authStateDoc.isLoggedIn = true;
			if (user.email !== undefined && user.email !== "") {
				authStateDoc.userName = user.email;
				if (user.emailVerified !== undefined) {
					authStateDoc.isVerified = user.emailVerified;
				}
			} else {
				authStateDoc.userName = user.phoneNumber;
				authStateDoc.isVerified = true;
			}
		}
	}
	console.log(authStateDoc);
	return (dispatch) => {
		dispatch(setAuthState(authStateDoc));
	};
};
