import { actionTypes } from "../data/enums/actionTypes";
import { authTypes } from "../data/enums/authTypes";
import AuthStateDocument from "../documents/AuthStateDocument";
import firebase from "../firebaseConfig";

const initialAuthState = new AuthStateDocument();

const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			var loginAuthState = new AuthStateDocument();
			if (action.isLogInError !== undefined && !action.isLogInError) {
				if (
					action.isVerified !== undefined &&
					action.isVerified === true
				) {
					loginAuthState.isVerified = true;
				}
				if (action.userName !== undefined && action.userName !== "") {
					loginAuthState.userName = action.userName;
				}
			}
			return {
				...state,
				isLoggedIn: loginAuthState.isLoggedIn,
				isVerified: loginAuthState.isVerified,
				userName: loginAuthState.userName,
				isSignUpError: loginAuthState.isSignUpError,
				isLogInError: loginAuthState.isLogInError,
				errorMessage: loginAuthState.errorMessage,
				comments: loginAuthState.comments,
			};

		case actionTypes.SIGNUP:
			var signupAuthState = new AuthStateDocument();
			if (
				action.authType !== undefined &&
				action.authType === authTypes.EMAIL
			) {
				if (
					action.email !== undefined &&
					action.password !== undefined &&
					action.email !== "" &&
					action.password !== ""
				) {
					firebase
						.auth()
						.setPersistence(firebase.auth.Auth.Persistence.SESSION)
						.then(function () {
							return (
								firebase
									.auth()
									.createUserWithEmailAndPassword(
										action.email,
										action.password
									)
									// .then((signupAuthState.userName = action.email))
									.catch(function (error) {
										var errorMessage = error.message;
										signupAuthState.isSignUpError = true;
										signupAuthState.errorMessage = errorMessage;
									})
							);
						})
						.catch(function (error) {
							var errorMessage = error.message;
							signupAuthState.isSignUpError = true;
							signupAuthState.errorMessage = errorMessage;
						});
				} else {
					signupAuthState.isSignUpError = true;
					signupAuthState.errorMessage =
						"Please enter both email and password.";
				}
			}
			return {
				...state,
				isLoggedIn: signupAuthState.isLoggedIn,
				isVerified: signupAuthState.isVerified,
				userName: signupAuthState.userName,
				isSignUpError: signupAuthState.isSignUpError,
				isLogInError: signupAuthState.isLogInError,
				errorMessage: signupAuthState.errorMessage,
				comments: signupAuthState.comments,
			};

		default:
			return state;
	}
};

export default authReducer;
// this.isLoggedIn = false;
// this.isVerified = false;
// this.userName = "Awesome User";
// this.isSignUpError = false;
// this.isLogInError = false;
// this.errorMessage = "";
// this.comments = "";
