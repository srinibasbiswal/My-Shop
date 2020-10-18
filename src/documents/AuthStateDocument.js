class AuthStateDocument {
	constructor() {
		this.isLoggedIn = false;
		this.isVerified = false;
		this.userName = "Awesome User";
		this.isSignUpError = false;
		this.isLogInError = false;
		this.errorMessage = "";
		this.comments = "";
	}
}

export default AuthStateDocument;
