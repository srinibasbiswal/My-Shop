import { setAuthState } from "../actions/authActions";
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

		case actionTypes.SIGNUP_ERROR:
			return {
				...state,
				isLoggedIn: action.authState.isLoggedIn,
				isVerified: action.authState.isVerified,
				userName: action.authState.userName,
				isSignUpError: action.authState.isSignUpError,
				isLogInError: action.authState.isLogInError,
				errorMessage: action.authState.errorMessage,
				comments: action.authState.comments,
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
					// signupAuthState = createUser(
					// 	signupAuthState,
					// 	action.email,
					// 	action.password
					// );

					firebase
						.auth()
						.setPersistence(firebase.auth.Auth.Persistence.SESSION)
						.then(function () {
							return firebase
								.auth()
								.createUserWithEmailAndPassword(
									action.email,
									action.password
								)
								.then((user) => {
									console.log(user);
								})
								.catch(function (error) {
									var errorMessage = error.message;
									signupAuthState.isSignUpError = true;
									signupAuthState.errorMessage = errorMessage;
									console.log(signupAuthState);
									return {
										...state,
										isLoggedIn: signupAuthState.isLoggedIn,
										isVerified: signupAuthState.isVerified,
										userName: signupAuthState.userName,
										isSignUpError:
											signupAuthState.isSignUpError,
										isLogInError:
											signupAuthState.isLogInError,
										errorMessage:
											signupAuthState.errorMessage,
										comments: signupAuthState.comments,
									};
								});
						})
						.catch(function (error) {
							var errorMessage = error.message;
						});
				} else {
					signupAuthState.isSignUpError = true;
					signupAuthState.errorMessage =
						"Please enter both email and password.";
				}
			}
			console.log(signupAuthState);
			break;
		// return {
		// 	...state,
		// 	isLoggedIn: signupAuthState.isLoggedIn,
		// 	isVerified: signupAuthState.isVerified,
		// 	userName: signupAuthState.userName,
		// 	isSignUpError: signupAuthState.isSignUpError,
		// 	isLogInError: signupAuthState.isLogInError,
		// 	errorMessage: signupAuthState.errorMessage,
		// 	comments: signupAuthState.comments,
		// };

		case actionTypes.SET_AUTH_STATE:
			console.log("Set Auth State" + action.authState);
			return {
				...state,
				isLoggedIn: action.authState.isLoggedIn,
				isVerified: action.authState.isVerified,
				userName: action.authState.userName,
				isSignUpError: action.authState.isSignUpError,
				isLogInError: action.authState.isLogInError,
				errorMessage: action.authState.errorMessage,
				comments: action.authState.comments,
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
