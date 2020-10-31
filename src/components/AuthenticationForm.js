import React from "react";
import SignUpForm from "./Forms/SignUpForm";
import LogInForm from "./Forms/LogInForm";
import styles from "../stylesheets/style.module.css";

function AuthenticationForm() {
	return (
		<div
			className={`uk-card uk-card-default uk-card-body uk-width-1-2@m uk-text-center uk-border-rounded ${styles.customShadow}`}
		>
			<div
				className={`switcherParent`}
				uk-switcher="animation: uk-animation-fade; toggle: > *"
			>
				<button
					class="uk-button uk-button-default uk-margin-medium-right uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					Sign Up
				</button>
				<button
					class="uk-button uk-button-default uk-margin-medium-right uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					Log In
				</button>
			</div>

			<ul class="uk-switcher uk-margin">
				<li>
					<SignUpForm />
				</li>
				<li>
					<LogInForm />
				</li>
			</ul>
		</div>
	);
}

export default AuthenticationForm;
