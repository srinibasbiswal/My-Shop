import { actionTypes } from "../data/enums/actionTypes";
import { authTypes } from "../data/enums/authTypes";
import AuthStateDocument from "../documents/AuthStateDocument";
import firebase from "../firebaseConfig";

export const logIn = () => {
	return {
		type: actionTypes.LOGIN,
	};
};

export const signUp = (authType, email, password) => {
	console.log(authType, email, password);
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
					console.log(user);
				})
				.catch(function (error) {
					var errorMessage = error.message;
					signupAuthState.isSignUpError = true;
					signupAuthState.errorMessage = errorMessage;
					dispatch({
						type: actionTypes.SIGNUP_ERROR,
						authState: signupAuthState,
					});
				});
		})
		.catch(function (error) {
			var errorMessage = error.message;
		});
};
