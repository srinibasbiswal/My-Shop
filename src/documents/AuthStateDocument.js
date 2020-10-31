class AuthStateDocument {
	constructor() {
		this.isLoggedIn = false;
		this.isVerified = false;
		this.userName = "Awesome User";
		this.userId = "";
		this.isSignUpError = false;
		this.isLogInError = false;
		this.errorMessage = "";
		this.comments = "";
		this.isOTPSent = false;
	}
}

export default AuthStateDocument;
