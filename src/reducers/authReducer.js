import { actionTypes } from "../data/enums/actionTypes";
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
				isLoggedIn: loginAuthState.isLoggedIn,
				isVerified: loginAuthState.isVerified,
				userName: loginAuthState.userName,
				isSignUpError: loginAuthState.isSignUpError,
				isLogInError: loginAuthState.isLogInError,
				errorMessage: loginAuthState.errorMessage,
				comments: loginAuthState.comments,
			};

		case actionTypes.SIGNUP:
			break;

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
