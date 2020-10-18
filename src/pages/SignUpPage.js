import React from "react";
import Footer from "../components/Footer";
import SignupForm from "../components/Forms/SignupForm";
import Header from "../components/Header";

function SignUpPage() {
	return (
		<React.Fragment>
			<Header />
			<SignupForm />
			<Footer />
		</React.Fragment>
	);
}

export default SignUpPage;
