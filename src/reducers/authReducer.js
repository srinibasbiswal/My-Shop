import { actionTypes } from "../data/enums/actionTypes";
import { authResponses } from "../data/enums/authResponses";
import AuthStateDocument from "../documents/AuthStateDocument";

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
				userId: loginAuthState.userId,
				isLoggedIn: loginAuthState.isLoggedIn,
				isVerified: loginAuthState.isVerified,
				userName: loginAuthState.userName,
				isSignUpError: loginAuthState.isSignUpError,
				isLogInError: loginAuthState.isLogInError,
				errorMessage: loginAuthState.errorMessage,
				comments: loginAuthState.comments,
			};

		case authResponses.SIGN_UP_SUCCESS:
		case authResponses.SIGN_UP_ERROR:
		case authResponses.LOG_IN_SUCCESS:
		case authResponses.LOG_IN_ERROR:
			return {
				...state,
				userId: action.authState.userId,
				isLoggedIn: action.authState.isLoggedIn,
				isVerified: action.authState.isVerified,
				userName: action.authState.userName,
				isSignUpError: action.authState.isSignUpError,
				isLogInError: action.authState.isLogInError,
				errorMessage: action.authState.errorMessage,
				comments: action.authState.comments,
			};

		case authResponses.SET_AUTH_STATE:
			return {
				...state,
				userId: action.authState.userId,
				isLoggedIn: action.authState.isLoggedIn,
				isVerified: action.authState.isVerified,
				userName: action.authState.userName,
				isSignUpError: action.authState.isSignUpError,
				isLogInError: action.authState.isLogInError,
				errorMessage: action.authState.errorMessage,
				comments: action.authState.comments,
				isOTPSent: action.authState.isOTPSent,
			};
		default:
			return state;
	}
};

export default authReducer;
