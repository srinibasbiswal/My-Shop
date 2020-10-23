import { actionTypes } from "../data/enums/actionTypes";
import { authResponses } from "../data/enums/authResponses";
import { authTypes } from "../data/enums/authTypes";
import AuthStateDocument from "../documents/AuthStateDocument";
import firebase from "../firebaseConfig";
import * as firebaseui from "firebaseui";

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

export const signUp = (authType, email, password, phoneNumber, otp) => {
	return (dispatch) => {
		switch (authType) {
			case authTypes.EMAIL:
				createUserUsingEmail(dispatch, email, password);
				break;

			case authTypes.PHONE:
				if (otp === undefined || otp === "") {
					createUserUsingPhone(dispatch, phoneNumber);
				} else {
					onSubmitOtp(dispatch, otp);
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
	};
};

export const setAuthState = (authState) => {
	return {
		type: authResponses.SET_AUTH_STATE,
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
					signupAuthState.isLoggedIn = true;
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
					logInAuthState.isLoggedIn = true;
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

const createUserUsingPhone = (dispatch, phoneNumber) => {
	console.log("inside authaction phoneNumber : " + phoneNumber);
	var signupAuthState = new AuthStateDocument();
	console.log(phoneNumber);
	setUpRecaptcha();
	let appVerifier = window.recaptchaVerifier;
	firebase
		.auth()
		.signInWithPhoneNumber("+" + phoneNumber.toString(), appVerifier)
		.then(function (confirmationResult) {
			window.confirmationResult = confirmationResult;
			console.log("OTP is sent");
			signupAuthState.isOTPSent = true;
			dispatch({
				type: authResponses.SET_AUTH_STATE,
				authState: signupAuthState,
			});
		})
		.catch(function (error) {
			signupAuthState.isSignUpError = true;
			if (error.code === "auth/invalid-phone-number")
				signupAuthState.errorMessage = "Invalid Phone Number";
			else {
				signupAuthState.errorMessage = error.message;
			}
			console.log(error);
			dispatch({
				type: authResponses.SIGN_UP_ERROR,
				authState: signupAuthState,
			});
		});
};

const setUpRecaptcha = () => {
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
		"recaptcha-container",
		{
			size: "invisible",
			callback: function (response) {
				console.log("Captcha Resolved");
				createUserUsingPhone();
			},
			defaultCountry: "IN",
		}
	);
};

const onSubmitOtp = (dispatch, otp) => {
	var signupAuthState = new AuthStateDocument();
	let otpInput = otp.toString();
	let optConfirm = window.confirmationResult;
	optConfirm
		.confirm(otpInput)
		.then(function (result) {
			let user = result.user;
			signupAuthState.userId = user.uid;
			signupAuthState.userName = user.email;
			signupAuthState.isLoggedIn = true;
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
};

const logOutDispatcher = (dispatch) => {
	var authStateDoc = new AuthStateDocument();
	firebase
		.auth()
		.signOut()
		.then(function () {
			// Sign-out successful.
			dispatch({
				type: authResponses.SET_AUTH_STATE,
				authState: authStateDoc,
			});
		})
		.catch(function (error) {
			// An error happened.
			dispatch({
				type: authResponses.SET_AUTH_STATE,
				authState: authStateDoc,
			});
		});
};
