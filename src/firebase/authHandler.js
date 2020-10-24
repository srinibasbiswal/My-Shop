import firebase from "../firebaseConfig";
import AuthStateDocument from "../documents/AuthStateDocument";
import { authResponses } from "../data/enums/authResponses";
import UserDocument from "../documents/UserDocument";
import { authTypes } from "../data/enums/authTypes";

const db = firebase.firestore();

export const createUserUsingEmail = (dispatch, email, password) => {
	var signupAuthState = new AuthStateDocument();
	firebase
		.auth()
		.setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(function () {
			return firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((result) => {
					signupAuthState.isLoggedIn = true;
					signupAuthState.userId = result.user.uid;
					signupAuthState.userName = result.user.email;
					var user = new UserDocument();
					user.userName = result.user.email;
					user.email = result.user.email;
					user.authType = authTypes.EMAIL;
					createNewUser(dispatch, result.user.uid, user);
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

export const logInUsingEmail = (dispatch, email, password, rememberMe) => {
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

export const createUserUsingPhone = (dispatch, phoneNumber) => {
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

export const onSubmitOtp = (dispatch, otp) => {
	var signupAuthState = new AuthStateDocument();
	let otpInput = otp.toString();
	let optConfirm = window.confirmationResult;
	optConfirm
		.confirm(otpInput)
		.then(function (result) {
			let user = result.user;
			console.log(user);
			signupAuthState.userId = user.uid;
			signupAuthState.userName = user.phoneNumber;
			signupAuthState.isLoggedIn = true;
			signupAuthState.isVerified = true;

			var userDoc = new UserDocument();
			userDoc.userName = user.phoneNumber;
			userDoc.phoneNumber = user.phoneNumber;
			userDoc.authType = authTypes.PHONE;
			userDoc.isVerified = true;
			createNewUser(dispatch, user.uid, userDoc);

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

export const logOutDispatcher = (dispatch) => {
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

const createNewUser = (dispatch, id, user) => {
	var docRef = db.collection("users").doc(id);
	docRef
		.get()
		.then(function (doc) {
			if (doc.exists) {
				console.log("Document data:", doc.data());
			} else {
				db.collection("users")
					.doc(id)
					.set({
						userName: user.userName.toString(),
						email: user.email,
						phoneNumber: user.phoneNumber,
						authType: user.authType,
						isVerified: user.isVerified,
					})
					.then(function () {
						console.log("Document successfully written!");
					})
					.catch(function (error) {
						console.error("Error writing document: ", error);
					});
			}
		})
		.catch(function (error) {
			console.log("Error getting document:", error);
		});
};
