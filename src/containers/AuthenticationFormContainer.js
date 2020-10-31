import { functions } from "firebase";
import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";

function AuthenticationFormContainer() {
	return (
		<div
			className={`uk-card uk-card-default uk-card-body uk-flex uk-flex-center`}
		>
			<AuthenticationForm />
		</div>
	);
}

export default AuthenticationFormContainer;
