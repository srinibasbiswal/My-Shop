import { actionTypes } from "../data/enums/actionTypes";
import { authTypes } from "../data/enums/authTypes";

export const logIn = () => {
	return {
		type: actionTypes.LOGIN,
	};
};

export const signUp = (authType, email, password) => {
	console.log(authType, email, password);
	return {
		type: actionTypes.SIGNUP,
		authType: authType,
		email: email,
		password: password,
	};
};
