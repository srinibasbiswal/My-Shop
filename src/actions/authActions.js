import { actionTypes } from "../data/enums/actionTypes";
import { authResponses } from "../data/enums/authResponses";
import { authTypes } from "../data/enums/authTypes";
import AuthStateDocument from "../documents/AuthStateDocument";
import firebase from "../firebaseConfig";

export const logIn = (authType, email, password, rememberMe) => {
	console.log(authType, email, password, rememberMe);
	return (dispatch) => {
		switch (authType) {
			case authTypes.EMAIL:
				logInUsingEmail(dispatch, email, password, rememberMe);
				break;

			default:
				break;
		}
	};
};

export const signUp = (authType, email, password) => {
	return (dispatch) => {
		switch (authType) {
			case authTypes.EMAIL:
				createUserUsingEmail(dispatch, email, password);
				break;

			default:
				break;
		}
	};
};

export const setAuthState = (authState) => {
	console.log(authState);
	return {
		type: actionTypes.SET_AUTH_STATE,
		authState: authState,
	};
};

const createUserUsingEmail = (dispatch, email, password) => {
	var signupAuthState = new AuthStateDocument();
	firebase
		.auth()
		.setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(function () {
			return firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user) => {
					signupAuthState.userId = user.uid;
					signupAuthState.userName = user.email;
					dispatch({
						type: authResponses.SIGN_UP_SUCCESS,
						authState: signupAuthState,
					});
				})
				.catch(function (error) {
					signupAuthState.isSignUpError = true;
					signupAuthState.errorMessage = error.message;
					dispatch({
						type: authResponses.SIGN_UP_ERROR,
						authState: signupAuthState,
					});
				});
		})
		.catch(function (error) {
			signupAuthState.isSignUpError = true;
			signupAuthState.errorMessage =
				"Sorry! Some error occurred. Please try again later.";
			dispatch({
				type: authResponses.SIGN_UP_ERROR,
				authState: signupAuthState,
			});
		});
};

const logInUsingEmail = (dispatch, email, password, rememberMe) => {
	var logInAuthState = new AuthStateDocument();
	var persistance =
		rememberMe !== undefined && rememberMe ? `LOCAL` : `SESSION`;
	firebase
		.auth()
		.setPersistence(firebase.auth.Auth.Persistence[`${persistance}`])
		.then(function () {
			console.log(email, password, rememberMe);
			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user) => {
					logInAuthState.userId = user.user.uid;
					logInAuthState.userName = user.user.email;
					dispatch({
						type: authResponses.LOG_IN_SUCCESS,
						authState: logInAuthState,
					});
				})
				.catch(function (error) {
					logInAuthState.isLogInError = true;
					logInAuthState.errorMessage = error.message;
					dispatch({
						type: authResponses.LOG_IN_ERROR,
						authState: logInAuthState,
					});
				});
		})
		.catch(function (error) {
			logInAuthState.isLogInError = true;
			logInAuthState.errorMessage =
				"Sorry! Some error occurred. Please try again later.";
			dispatch({
				type: authResponses.SIGN_UP_ERROR,
				authState: logInAuthState,
			});
		});
};
