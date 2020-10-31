import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthenticationFormContainer from "../containers/AuthenticationFormContainer";

function AuthenticationPage() {
	return (
		<React.Fragment>
			<Header />
			<AuthenticationFormContainer />
			<Footer />
		</React.Fragment>
	);
}

export default AuthenticationPage;
